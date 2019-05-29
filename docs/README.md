# Concept

Vuepress-live allows you to make your examples more interactive automatically. For now, just add a `live` after the language in your fenced code samples like this.

## Make example live

Writing this in your markdown...

<pre><code>```vue live
&lt;button&gt;example&lt;/button&gt;
```
</code></pre>

...will have this result.

Go ahead! edit the part on the left. The right side has changed.

```html live
<button>example</button>
```

You can continue using non-rendered code if you don't add `live`

```html
<button>example</button>
```

## Showcase components

Using the [@vuepress/register-components](https://www.npmjs.com/package/@vuepress/plugin-register-components) plugin, one can load components in their vuepress site. Since they are now available they can now be showcased.

Here you can see the [vue-slider-component](https://www.npmjs.com/package/vue-slider-component) in action.

```jsx live
let value = 72

<div>value: {{ value }}</div>
<vue-slider
      style="margin: 20px 0;"
      v-model="value"
      :order="false"
    />
```

You can even require external libraries in your examples.
```jsx live
const _ = require("lodash")
const anu = [2, 5, 7]
const newArray = []
_.each(anu, a => {
  newArray.push(`number: ${a}`)
})

<div>value: {{ newArray.join(",") }}</div>
```
