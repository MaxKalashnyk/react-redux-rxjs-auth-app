const proxy = require("http-proxy-middleware");
// disabling coz have nodejs syntax
/* eslint-disable */
module.exports = function(app) {
  app.use(
    "/api",
    proxy({
      target: process.env.REACT_APP_API_HOST || "https://dev-api.nomadhomes.co",
      changeOrigin: true
    })
  );
};
