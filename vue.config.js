const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8000,
    host: "localhost",
    open: true,
    proxy: {
      "/data": {
        target: "http://127.0.0.1/8000",
        changeOrigin: true,
        pathRewrite: {
          "^data/": "",
        },
      },
    },
  },
});
