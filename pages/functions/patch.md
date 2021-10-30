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

## Custom patch functions

You can use the `compose` driver to create your own custom patch functions. The `compose` driver accepts an array of drivers, which runs after the sweeping modifications of an element is patched and more pinpoint modifications may be necessary.

**`compose` Syntax:** `compose([childrenDriver(), propsDriver(), yourOwnDriver([anotherDriver()])])`\
**`VDriver` Signature:** `(el, newVNode, oldVNode, workStack) => { ...; return { el, newVNode, oldVNode, workStack } }`

If you use a IDE like [VSCode](https://code.visualstudio.com/), you can look into the implementations of how to create a `VDriver` and create your own drivers.

```js
import { m, compose, propsDriver, childrenDriver, createElement, flushWorkStack } from 'million';

const myCustomPatch = (el, newVNode, oldVNode, workStack = []): DOMNode => {
  const composeDriver = compose([childrenDriver(), propsDriver()]);
  const data = composeDriver(el, newVNode, oldVNode, workStack);
  flushWorkStack(data.workStack);
  return data.el;
};

const vnode0 = m('div');
const el = createElement(vnode0);

document.body.appendChild(el);
const vnode1 = m('div', { id: 'app' }, ['Hello World']);

myCustomPatch(el, vnode1);
```

## Writing your own drivers

Below is an example template for your own custom driver:

```js
const customDriver =
  (drivers = []) =>
  (el, newVNode, oldVNode, workStack = []) => {
    /**
     * `drivers` can add another optional layer of composibility, you can run the drivers
     * by passing the same `drivers[i](el, newVNode, oldVNode, workStack)`, or a manipulated
     * version downstream `drivers[i](el.childNodes[j], newVNode.children[j], undefined, workStack)`.
     * The great thing about sub-drivers is you can run them anywhere you want inside the driver!
     */

    return {
      el,
      newVNode,
      oldVNode,
      workStack,
    };
  };
```
