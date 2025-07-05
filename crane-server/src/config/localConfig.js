const ENV = process.env.NODE_ENV || 'dev';

const BASE_URLS = {
    dev: 'https://tremendous-revolution-certificates-equilibrium.trycloudflare.com',
    stg: 'https://tremendous-revolution-certificates-equilibrium.trycloudflare.com',
    prd: 'https://buly.kr/6Mrp2Vo'
};

module.exports = {
    ENV,
    BASE_URL: BASE_URLS["stg"], // BASE_URLS[ENV],
    LOGIN_ENDPOINT: '/auth/login',
    USER_ID: 'my-user-id',
    PASSWORD: 'my-password',
    STATIC_COOKIE: 'sessionid=noCookie_129175shSU3n1sbw43EE'
};