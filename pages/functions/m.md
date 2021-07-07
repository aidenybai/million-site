# `m(tag, props?, children?, flag?)`

It is recommended that you use `m` to create vnodes. It accepts a tag as a string, an optional props object, an optional array of children, and an optional flag.

```js
import { m, VFlags } from 'million';

const vnode = m('div', { id: 'app' }, ['Hello World'], VFlags.ONLY_TEXT_CHILDREN);
```

```js
{
  tag: 'div',
  props: {
    id: 'app'
  },
  children: ['Hello World'],
  flag: 1 << 1 /* ONLY_TEXT_CHILDREN */
}
```

## Flags

Flags allow for the `patch` function to optimize condition branches. They are optional, but are **highly recommended.**

- `NO_CHILDREN`: 0
- `ONLY_TEXT_CHILDREN`: 1
- `ANY_CHILDREN`: 2

## `undefined` values

It is highly recommended you provide the `undefined` value even though it it optional to ensure monomorphic calls, allowing the V8 engine to optimize your code.

```js
import { m, VFlags } from 'million';

const vnode = m('div', undefined, undefined, VFlags.NO_CHILDREN);
```

```js
{
  tag: 'div',
  flag: 1 << 0 /* NO_CHILDREN */
}
```

## `className` and `style` props

The `className` and `style` props need to be preprocessed using the `className` and `style` functions to convert objects to strings. The class object syntax allows for you to toggle classes based on a boolean value. The style object syntax allows you to set styles in a clean format.

```js
import { m, className, style, VFlags } from 'million';

const vnode = m(
  'div',
  {
    className: className({ class1: true, class2: false, class3: 1 + 1 === 2 }),
    style: style({ color: 'black', 'font-weight': 'bold' }),
  },
  ['Hello World'],
  VFlags.ONLY_TEXT_CHILDREN,
);
```

```js highlight=4,5
{
  tag: 'div',
  props: {
    className: 'class1 class3',
    style: 'color:black;font-weight:bold'
  },
  children: ['Hello World'],
  flag: 1 << 1 /* ONLY_TEXT_CHILDREN */
}
```

## SVG support

SVGs need to be preprocessed using the `svg` function to add `ns` props to the element and all of the children of that element.

```js
import { m, svg, VFlags } from 'million';

const vnode = svg(m('svg', undefined, undefined, VFlags.NO_CHILDREN));
```

```js highlight=4
{
  tag: 'svg',
  props: {
    ns: 'http://www.w3.org/2000/svg'
  },
  flag: 1 << 0 /* NO_CHILDREN */
}
```

## Optimization via keys

Most of the time, the diffing and patching process is fast enough, but when dealing with a large amount of children, it is best to provide runtime hints through keys. You can attach a `key` under props. When patched, it will only diff props and children if the `key` is changed.

```js
import { m, VFlags } from 'million';

const vnode = m('div', { key: 'foo' }, ['Hello World'], VFlags.ONLY_TEXT_CHILDREN);
```

```js highlight=5
{
  tag: 'div',
  props: {},
  children: ['Hello World'],
  key: 'foo',
  flag: 1 << 1 /* ONLY_TEXT_CHILDREN */
}
```
