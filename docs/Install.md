# Install & Config

Vuepress-live allows you to make your examples more interactive automatically. For now, just add a `live` after the language in your fenced code samples like this.

## Install

```sh
yarn add -D vuepress-plugin-live
# or with npm:  npm install -D vuepress-plugin-live
```

## Configure

In `.vuepress/config.js` add `["live"]` to the list of plugins

```js{3,4,5}
module.exports = {
  //...
  plugins: [
    ["live"],
    [
      "@vuepress/register-components",
      {
        components: [
          {
            name: "vue-slider",
            path: path.resolve(__dirname, "../vue-slider")
          }
        ]
      }
    ]
  ]
};
```
