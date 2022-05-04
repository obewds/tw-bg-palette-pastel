---
head:
  - - link
    - rel: icon
      href: favicon.ico
---




# @obewds/tw-bg-palette-pastel

Welcome to the docs page for OBE:WDS's `twBgPalettePastel` component for [Vue.js](https://vuejs.org/)!

<br>




## Installation

```bash
npm install @obewds/tw-bg-palette-pastel --save-dev
```

<br>




## Object Schema

The object returned when importing Tailwind CSS background pastel color palette has the following schema:

```javascript
{
    'pastel': {
        colors: {
            'default': '',
            'error': '...',
            'primary': '...',
            'secondary': '...',
            'success': '...',
        },
    },
}
```

<br>





## Use Example

```html{3,8,16}
<script setup lang="ts">

    import { twBgPalettePastel } from '@obewds/tw-bg-palette-pastel'

    const props = defineProps({
        bgClasses: {
            type: String,
            default: twBgPalettePastel.pastel.colors.primary,
        },
    })

</script>

<template>

    <div :class="bgClasses">
        {{ bgClasses }}
    </div>

</template>
```




## Uninstall

```bash
npm uninstall @obewds/tw-bg-palette-pastel
```



<!--
## Markdown Examples

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip CUSTOM TITLE
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
-->
