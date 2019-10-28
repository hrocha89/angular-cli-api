const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080/',
      secure : false,
      logLeve : 'debug',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;