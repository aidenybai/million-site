# Installation

Million doesn't require build tools by default, but it is highly recommended you use NPM to install.

If you use NPM to install Million, ensure that you use a bundler like [Vite](https://vitejs.dev) or [Rollup](https://rollupjs.org/).

```sh
npm install million
```

To install via browser, use a CDN like unpkg and import million by ESM.

```html
<script type="module">
  import * as Million from 'https://unpkg.com/million?module';

  // Your code here
</script>
```
