
// copdig para destracar o CORS se nescessario
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://api.github.com',
//       // changeOrigin: true,
//       pathRewrite: {
//         '^/api': '', // Remove a parte "/api" da URL da solicitação
//       },
//     })
//   );
// };
