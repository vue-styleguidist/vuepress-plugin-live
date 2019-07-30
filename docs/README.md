# Concept

vuepress-plugin-live allows you to make your examples more interactive automatically. For now, just add a `live` after the language in your fenced code samples like this.

This plugin uses [vue-live](https://github.com/vue-styleguidist/vue-live) under the hood.
Check on [vue-live site](http://vue-live.surge.sh/) what formats examples accept.

## Make example live

Writing this in your markdown...

````md
```vue live
<button>example</button>
```
````

...will have this result.

```vue live
<button>example</button>
```

Go ahead! edit the part on the left. The right side has changed.

You can continue using non-rendered code if you don't add `live`

```vue
<button>example</button>
```

## Showcase components

Using the [@vuepress/register-components](https://www.npmjs.com/package/@vuepress/plugin-register-components) plugin, one can load components in their vuepress site. Since they are now available they can now be showcased.

Here you can see the [vue-slider-component](https://www.npmjs.com/package/vue-slider-component) in action.

```vue-hybrid live
let value = 72

<div>value: {{ value }}</div>
<vue-slider
      style="margin: 20px 0;"
      v-model="value"
      :order="false"
    />
```

You can even require external libraries in your examples.

```vue-hybrid live
const _ = require("lodash")
const anu = [2, 5, 7]
const newArray = []
_.each(anu, a => {
  newArray.push(`number: ${a}`)
})

<div>
  value: {{ newArray.join(", ") }}
</div>
```

## Enable jsx with the jsx flag

If your examples are jsx vue components, use an extra jsx flag

````md
```jsx jsx live
export default {
  render(){
    return <vue-slider
      value={37}
    />
  }
}
```
````

> **NOTE**: The jsx flag should always be second after the language. If you use just `jsx live` as a flag it will use the standard vue parser.
> JSX syntax highlighting in markdown is better than vue. You can still use jsx with your normal examples.

Without the second jsx flag, vue-live would pick up on the beginnig of the jsx expression and stop parsing there.
The script would be incomplete.

```jsx jsx live
export default {
  data(){
    return {
      value: 37
    }
  },
  render(){
    return (
      <div>
        <vue-slider
          style={{margin: "20px 0"}}
          value={this.value}
          order={false}
        />
      </div>
    )
  }
}
```
