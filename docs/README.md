# VuePress Live

Vuepress-live allows you to make your examples more interactive automatically. For now, just add a `live` after the language in your fenced code samples like this.

<pre><code>```vue live
&lt;h1&gt; Hello World&lt;/h1&gt;
```
</code></pre>

Here is a live example

```html live
<button>example</button>
```

Here is a static example

```html
<button>example</button>
```


---

## And showcasing more avanced component

Using the [@vuepress/register-components](https://www.npmjs.com/package/@vuepress/plugin-register-components) plugin, one can hlaod components in their vuepress site. Since they are now available they can now be showcased.

Here you can see the [vue-slider-component](https://www.npmjs.com/package/vue-slider-component) in action.

```jsx live
let value = 72;

<div>value: {{ value }}</div>
<vue-slider
      style="margin: 20px 0;"
      v-model="value"
      :order="false"
    />
```
