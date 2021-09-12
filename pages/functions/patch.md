# `patch`

**Syntax:** `patch(element, newVnode, prevVNode?, workStack = [], commit = (callback) => callback())`\
**Example:** `patch(el, m('div'), m('div', undefined, ['Hello World']))`

The `patch` function updates the DOM content by determing pinpoint changes through diffing a new VNode with an old VNode. It accepts an HTMLElement or Text, a new VNode, and an optional previous VNode. It also returns the resulting HTMLElement or Text.

You can leverage [Flags](/functions/m#flags) and [Deltas](/functions/m#deltas) to improve the performance of patch calls by reducing the need to diff children by improving time complexity.

```js
import { m, patch, createElement } from 'million';

const vnode0 = m('div');
const el = createElement(vnode0);

document.body.appendChild(el);
const vnode1 = m('div', { id: 'app' }, ['Hello World']);

patch(el, vnode1);
// document.body.innerHTML = '' -> '<div id="app">Hello World</div>'

const vnode2 = m('div', { id: 'app' }, ['Goodbye World']);

patch(el, vnode2);
// document.body.innerHTML = '<div id="app">Hello World</div>' -> '<div id="app">Goodbye World</div>'
```

## Manipulating Work

You can specify the `workStack` array and `commit` function to allow fine grained control over the mutation of the DOM. The workStack is an array of callbacks, and you can explicitly provide callbacks to run before the computed operations. You can also specify a `commit` function, which is a function that runs the callbacks in `workStack`. Generally, you should use this for some sort of scheduling, such as with the [`schedule`](/functions/schedule) function.

```js
import { m, patch, schedule, createElement } from 'million';

const vnode0 = m('div');
const el = createElement(vnode0);

document.body.appendChild(el);
const vnode1 = m('div', { id: 'app' }, ['Hello World']);

patch(el, vnode1, vnode0, [() => console.log('Starting work')], schedule);
// stdout -> 'Starting work'
// Every unit of work is scheduled now
```

## Custom patch functions

You can use the `init` function to create your own custom patch functions. The `init` function accepts a `patchProps` function, `patchChildren` function, and a rest parameter with `effects` to run, and returns a custom `patch` function.

**Syntax:** `init(patchProps, patchChildren, ...effects)`

This function is extremely useful when you need to add unique or unpredictable behavior to your patch functions, such as additional effects to run after the patch.

```js
import { m, init, patchProps, patchChildren, createElement } from 'million';

const myCustomPatch = init(patchProps, patchChildren);

const vnode0 = m('div');
const el = createElement(vnode0);

document.body.appendChild(el);
const vnode1 = m('div', { id: 'app' }, ['Hello World']);

myCustomPatch(el, vnode1);
```
