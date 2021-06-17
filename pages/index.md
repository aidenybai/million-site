# Introduction

### &lt;1kb virtual DOM - it's fast!

Current Virtual DOM implementations are inadequate—Ranging from overcomplicated to abandoned, most are unusable without sacrificing raw performance and size. Million aims to fix this, providing a library-agnostic Virtual DOM to serve as the core for Javascript libraries.

## Clicker Game Example

Below is an extremely simple implementation of a clicker app using Million.

```js
import { m, createElement, patch } from 'million';

let clicks = 0;
const app = createElement(
  m(
    'button',
    {
      id: 'app',
      onclick: () => {
        patch(app, m('button', { id: 'app' }, [String(++clicks)]));
      },
    },
    [String(clicks)],
  ),
);
document.body.appendChild(app);
```

See the demo below:

<iframe frameBorder="0" width="100%" height="500px" src="https://replit.com/@aidenybai/million-demo?embed=true"></iframe>

## Resources & Contributing Back

Looking for the docs? Check the [documentation](https://million.js.org) out.

Have a question about Million? Post it on the [GitHub Discussions](https://github.com/millionjs/million/discussions) and ask the community for help.

Find a bug? Head over to our [issue tracker](https://github.com/millionjs/million/issues) and we'll do our best to help. We love pull requests, too!

We expect all Million contributors to abide by the terms of our [Code of Conduct](https://github.com/millionjs/million/blob/main/.github/CODE_OF_CONDUCT.md).

[**→ Start contributing on GitHub**](https://github.com/millionjs/million/blob/main/.github/CONTRIBUTING.md)

## Acknowledgments

Million takes heavy inspiration from [React](https://github.com/facebook/react), and believes in the core philosophies and values behind [Lucia](https://github.com/aidenybai/lucia) and [Inferno](https://github.com/infernojs/inferno). Feel free to check them out if you interested in an alternative library to use.

_Why is it called "Million"? The name originated with the goal of being able to handle [1M+ ops/sec for benchmarks](https://github.com/millionjs/million/tree/main/benchmarks)_
