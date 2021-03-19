export default {
  repository: 'https://github.com/aidenybai/docs', // project repo
  docsRepository: 'https://github.com/aidenybai/docs', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – Aiden Bai',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: false,
  footerText: '© 2021 Aiden Bai',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: <>
    <span><b>Documentation</b> by Aiden Bai</span>
  </>,
  head: <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Documentation" />
    <meta name="og:title" content="Aiden Bai" />
  </>
}