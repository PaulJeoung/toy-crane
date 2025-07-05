const axios = require('axios');
const config = require('../config/localConfig');

class ExtPOFApiService {
    constructor() {
        this.baseUrl = config.BASE_URL;
        this.cookie = null;

        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async init() {
        try {
            // const loginResponse = await axios.post(
            //     `${this.baseUrl}${config.LOGIN_ENDPOINT}`,
            //     {
            //         userId: config.USER_ID,
            //         password: config.PASSWORD,
            //     }
            // );
            const loginResponse = {
                headers: {
                    'set-cookie': config.STATIC_COOKIE
                }};

            const setCookie = loginResponse.headers['set-cookie'];
            if (setCookie && setCookie.length > 0) {
                if (Array.isArray(setCookie)) {
                    this.cookie = setCookie.join('; '); // 배열일 경우 join으로 쿠키 병합
                } else if (typeof setCookie === 'string') {
                    this.cookie = setCookie; // 문자열일 경우 그대로 사용
                }
                console.log('External API login success. Cookie saved.');
            } else {
                console.warn('⚠️ Login response has no cookie. Using fallback static cookie.');
            }
        } catch (error) {
            console.error('Login failed:', error.message);
            console.warn('⚠️ Falling back to static cookie from config.');
            throw error;
        }
    }

    async fetchData(endpoint, params = {}, extraHeaders = {}) {
        try {
            const response = await this.axiosInstance.get(endpoint, {
                params,
                headers: {
                    Cookie: this.cookie,
                    ...extraHeaders,
                },
            });
            console.log(endpoint, params, extraHeaders);
            // console.log('extPOFService of Axios fetch process complete', response.data);
            return response.data;
        } catch (error) {
            this._handleError(error, 'GET', endpoint);
            throw error;
        }
    }

    async postData(endpoint, data = {}, extraHeaders = {}) {
        try {
            const response = await this.axiosInstance.post(endpoint, data, {
                headers: {
                    Cookie: this.cookie,
                    ...extraHeaders,
                },
            });
            return response.data;
        } catch (error) {
            this._handleError(error, 'POST', endpoint);
            throw error;
        }
    }

    _handleError(error, method, endpoint) {
        if (error.response) {
            console.error(`❌ [${method}] ${endpoint} → Response Error:`, error.response.data);
        } else if (error.request) {
            console.error(`❌ [${method}] ${endpoint} → No Response:`, error.request);
        } else {
            console.error(`❌ [${method}] ${endpoint} → Config Error:`, error.message);
        }
    }
}
module.exports = new ExtPOFApiService();