# `m(tag, props?, children?)`

It is recommended that you use `m` to create vnodes. It accepts a tag as a string, an optional props object, and an optional array of children.

```js
import { m } from 'million';

const vnode = m('div', { id: 'app' }, ['Hello World']);
```

```js
{
  tag: 'div',
  props: {
    id: 'app'
  },
  children: ['Hello World']
}
```

## `undefined` values

You can import the `_` shorthand for `undefined`.

```js
import { m, _ } from 'million';

// No props, but has children
const vnode = m('div', _, ['Hello World']);
```

```js
{
  tag: 'div',
  children: ['Hello World']
}
```

## `className` and `style` props

The `className` and `style` props are handled automatically by the `m` function. Internally, it uses the `className` and `style` functions to convert objects to strings. The class object syntax allows for you to toggle classes based on a boolean value. The style object syntax allows you to set styles in a clean format.

```js
import { m, _ } from 'million';

const className = { class1: true, class2: false, class3: 1 + 1 === 2 };
// 'class1 class3'
const style = { color: 'black', 'font-weight': 'bold' };
// 'color:black;font-weight:bold'

const vnode = m('div', { className, style }, ['Hello World']);
```

```js
{
  tag: 'div',
  props: {
    className: 'class1 class3',
    style: 'color:black;font-weight:bold'
  },
  children: ['Hello World']
}
```

## SVG support

SVGs are automatically handled by the `m` function. Internally, it uses the `ns` function to add `ns` props to the element and all of the children of that element.

```js
import { m, _ } from 'million';

const vnode = m('svg');
```

```js
{
  tag: 'svg',
  props: {
    ns: 'http://www.w3.org/2000/svg'
  },
}
```

## Optimization via keys

Most of the time, the diffing and patching process is fast enough, but when dealing with a large amount of children, it is best to provide runtime hints through keys. You can attach a `key` under props. When patched, it will only diff props and children if the `key` is changed.

```js
import { m } from 'million';

const vnode = m('div', { key: 'foo' }, ['Hello World']);
```
