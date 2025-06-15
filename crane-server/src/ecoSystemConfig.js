module.exports = {
  apps: [{
    name: 'crane-portal-api',
    script: './src/ServerApp.js',
    watch: true,
    env: {
      NODE_ENV: 'development',
    },
  }]
};
