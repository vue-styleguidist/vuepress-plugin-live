# Install & Config

Vuepress-live allows you to make your examples more interactive automatically. For now, just add a `live` after the language in your fenced code samples like this.

## Install

```sh
yarn add -D vuepress-plugin-live
# or with npm:  npm install -D vuepress-plugin-live
```

## Configure

In `.vuepress/config.js` add `["live"]` to the list of plugins

```js{6,7,8,9,10,11,12}
const path = require("path");

module.exports = {
  //...
  plugins: [
    [
      "live",
      {
        // optional: use layout to customize how the live editor is going to look like
        layout: path.resolve(__dirname, "./myCustomLayout.vue")
      }
    ],
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

### Options

#### `layout` (optional)

Absolute path to the layout vue-live is going to use.
NOTA: the layout should have 2 slots named `preview` and `editor`.

Example layout (simplest):

```vue
<template functional>
  <div>
    <slot name="preview"></slot>
    <slot name="editor"></slot>
  </div>
</template>
```
