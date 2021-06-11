export default {
  repository: 'https://github.com/millionjs/docs', // project repo
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
  footerText: '© 2021 Aiden Bai, William Lane',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: <>
    &nbsp;<span><img style={{ height: '30px' }} src={'https://raw.githubusercontent.com/millionjs/million/main/.github/assets/logo.svg'} /></span>
  </>,
  head: <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="<1kb virtual DOM - it's fast!" />
    <meta name="og:title" content="Million" />
  </>
}