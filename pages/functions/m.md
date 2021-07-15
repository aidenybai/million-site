# `m`

**Syntax:** `m(tag, props?, children?, flag?, delta?)`\
**Example:** `m('div', { id: 'app' }, ['Hello World'])`

It is recommended that you use `m` to create vnodes. It accepts a tag as a string, an optional props object, an optional array of children, and an optional flag.

```js
import { m, VFlags } from 'million';

const vnode = m('div', { id: 'app' }, ['Hello World']);
```

```js
{
  tag: 'div',
  props: {
    id: 'app'
  },
  children: ['Hello World'],
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
}
```

## SVG support

processed using the `svg` function to add `ns` props to the element and all of the children of that element.

```js
import { m, svg, VFlags } from 'million';

const vnode = svg(m('svg'));
```

```js highlight=4
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
import { m, VFlags } from 'million';

const vnode = m('div', { key: 'foo' }, ['Hello World']);
```

```js highlight=5
{
  tag: 'div',
  props: {},
  children: ['Hello World'],
  key: 'foo',
}
```

## Flags

Flags allow for the `patch` function to optimize condition branches. They are optional, but are **highly recommended**, as they make time complexity much more efficient and can be precomputed during compile-time. Note that flags will be ignored if the generated vnode is provided as the previous vnode during a `patch` call.

- **`VFlags.NO_CHILDREN`: `1 << 0`**\
  If your element has no children, you can set this flag to skip the children diffing entirely.

  ```js
  import { m, VFlags } from 'million';

  const vnode = m('div', undefined, [], VFlags.NO_CHILDREN);
  ```

  ```js highlight=4
  {
    tag: 'div',
    children: [],
    flag: 1 << 0 /* VFlags.NO_CHILDREN */,
  }
  ```

- **`VFlags.ONLY_TEXT_CHILDREN`: `1 << 1`**\
  If your element has only text children, you can set this flag to skip the children diffing and only mutate the `textContent` property of the HTMLElement.

  ```js
  import { m, VFlags } from 'million';

  const vnode = m('div', undefined, ['Hello ', 'World!'], VFlags.ONLY_TEXT_CHILDREN);
  ```

  ```js highlight=4
  {
    tag: 'div',
    children: ['Hello ', 'World!'],
    flag: 1 << 1 /* VFlags.ONLY_TEXT_CHILDREN */,
  }
  ```

- **`VFlags.ANY_CHILDREN`: `1 << 2`**\
  If your element has a mix or only VElement children, you can set this flag to default to normal diffing. Generally, you don't need to explicity set this flag, as it is the default behavior.

  ```js
  import { m, VFlags } from 'million';

  const vnode = m(
    'div',
    undefined,
    ['Here is my button: ', m('button', undefined, ['Hi!'])],
    VFlags.ANY_CHILDREN,
  );
  ```

  ```js highlight=4
  {
    tag: 'div',
    children: ['Here is my button: ', { tag: 'button', children: ['Hi'] }],
    flag: 1 << 2 /* VFlags.ANY_CHILDREN */,
  }
  ```

## Deltas

Deltas are a way for the compile-time to optimize runtime operations by providing a set of predefined operations. This is useful for cases where you are patching a large amount of children, or when you have a large amount of props.

There are three types of delta operations: `INSERT`, `UPDATE`, and `DELETE`. You can provide a specified index to select the position of the vnode's children to be inserted, updated, or deleted.

- `INSERT` is used to add children at a selected index.\
  **Syntax:** `INSERT(index)`\
  **Example:** `INSERT(0)`

- `UPDATE` is used to replace children at a selected index.\
  **Syntax:** `UPDATE(index)`\
  **Example:** `UPDATE(0)`

- `DELETE` is used to remove children at a selected index.\
  **Syntax:** `DELETE(index)`\
  **Example:** `DELETE(0)`

You can load these operations into a delta, or an array. You can pass them inside the `m` function.

```js
import { m, INSERT, UPDATE, DELETE } from 'million';

const vnode = m('div', undefined, ['Hello World'], undefined, [INSERT(0), UPDATE(0)]);
```

```js highlight=5,6
{
  tag: 'div',
  children: ['Hello World'],
  delta: [
    [1 << 0 /* VDeltaOperationTypes.INSERT */, 0],
    [1 << 1 /* VDeltaOperationTypes.UPDATE */, 0],
  ]
}
```
