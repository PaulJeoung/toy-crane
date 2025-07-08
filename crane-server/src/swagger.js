const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'The Crane API',
            version: '1.0.0',
            description: 'Express + Swagger API example',
        },
        servers: [
            {
                url: 'http://localhost:4000',
            },
        ],
    },
    apis: [
        './src/routers/**/*.js', // routers 경로에 주석 작성
        './src/api/*.js' // Swagger 주석이 들어간 파일 경로
    ],
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};
