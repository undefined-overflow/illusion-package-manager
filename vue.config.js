const isDevelopment = process.env.NODE_ENV == 'development';

module.exports = {
  publicPath: isDevelopment ? '/' : '/illusion-package-manager/'
};
