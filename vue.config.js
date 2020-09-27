const path = require("path");

module.exports = {
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./src/frontend/main.js")
      .end();
    config
      .resolve
      .alias
      .set("@", path.resolve(__dirname, "src/frontend"));
  },
  transpileDependencies: ["vuetify"]
};
