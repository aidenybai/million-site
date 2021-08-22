export default {
  repository: 'https://github.com/aidenybai/million', // project repo
  docsRepository: 'https://github.com/millionjs/docs', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – Million',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      MIT {new Date().getFullYear()} © Aiden Bai.
      <div style={{ marginLeft: 20 }}>
        <a href="https://vercel.com/?utm_source=millionjs&utm_campaign=oss" target="_blank">
          <img
            style={{ height: 30, filter: 'invert(100)', opacity: 0.8 }}
            src="https://raw.githubusercontent.com/aidenybai/million/main/.github/assets/vercel-logo.svg"
            alt="Vercel"
          />
        </a>
      </div>
    </div>
  ),
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <>
      <img
        className="md:inline object-contain hidden"
        style={{ height: '2em' }}
        src={'https://raw.githubusercontent.com/aidenybai/million/main/.github/assets/icon.svg'}
      />
      <span className="ml-2 mr-2 font-bold hidden md:inline">Million</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        &lt;1kb compiler-focused virtual DOM. It's fast!
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="<1kb virtual DOM - it's fast!" />
      <meta name="og:title" content="Million" />
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://raw.githubusercontent.com/aidenybai/million/main/.github/assets/icon.svg"
      />
    </>
  ),
};
