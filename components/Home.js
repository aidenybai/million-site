import {
  AdjustmentsIcon,
  CodeIcon,
  CursorClickIcon,
  DuplicateIcon,
  EyeIcon,
  LightningBoltIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import copy from 'copy-to-clipboard';
import Head from 'next/head';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import Container from './Container';
import Vercel from './Vercel';

const features = [
  {
    name: 'Lightweight',
    description: (
      <>
        Million ships <b>&lt;1kb</b> brotli bundles after tree shaking and
        minification. Get <b>fast bundle</b> load times!
      </>
    ),
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Performance',
    description: (
      <>
        Million uses the <b>latest performance optimizations</b> for the
        compiler to <b>supercharge runtime</b> rendering.
      </>
    ),
    icon: LightningBoltIcon,
  },
  {
    name: 'Compiler-first',
    description: (
      <>
        Million supports <b>full-class support for compiler</b> optimizations,
        allowing you to <b>ergonomically</b> create your own compiler over
        Million.
      </>
    ),
    icon: EyeIcon,
  },
  {
    name: 'Sensible API',
    description: (
      <>
        Million's API is <b>simple to use with batteries-included</b>. Best
        practices by default!
      </>
    ),
    icon: CodeIcon,
  },
  {
    name: 'Library Agnostic',
    description: (
      <>
        Million doesn't make decisions on library design, meaning you can
        leverage Million's generalized API to build your own opinionated
        abstractions.
      </>
    ),
    icon: CursorClickIcon,
  },
  {
    name: 'Decoupled + Composable',
    description: (
      <>
        Million is <b>extensible</b> in features, so you can build up complexity
        and features with ease (<i>like Legos!</i>).
      </>
    ),
    icon: AdjustmentsIcon,
  },
];

export default function Page() {
  const onClick = () => {
    copy('npm install million');
    toast.success('Copied to clipboard');
  };
  return (
    <>
      <Head>
        <title>Million</title>
      </Head>
      <div className="px-4 pt-20 pb-8 sm:px-6 sm:pt-24 lg:px-8 dark:text-white">
        <h1 className="text-center text-7xl font-extrabold tracking-tighter leading-[1.1] sm:text-5xl lg:text-9xl xl:text-9xl">
          Virtual DOM
          <br />
          <br className="hidden lg:block" />
          <span className="future inline-block text-transparent bg-clip-text bg-gradient-radial from-color2 to-color2 via-color1 animate-gradient-x bg-repeat">
            into the future.
          </span>{' '}
        </h1>
        <p className="max-w-lg mx-auto mt-6 text-3xl font-medium leading-tight text-center text-gray-400 sm:max-w-3xl sm:text-2xl md:text-3xl lg:text-3xl">
          Million is a{' '}
          <b>
            lightweight (<i>&lt;1kb</i>)
          </b>
          , compiler-augmented virtual DOM. It's{' '}
          <a
            href="https://million.js.org/benchmarks"
            className="italic font-bold no-underline"
          >
            fast
          </a>
          !
        </p>
        <div className="max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md">
            <Link href="/docs/getting-started">
              <a className="flex items-center justify-center w-full px-8 py-3 text-md font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6">
                Get started →
              </a>
            </Link>
          </div>

          <div className="relative mt-3 rounded-md sm:mt-0 sm:ml-3">
            <button
              onClick={onClick}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-md font-medium text-gray-600 bg-black border border-transparent border-gray-200 rounded-md bg-opacity-5 dark:bg-white dark:text-gray-300 dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-gray-50 betterhover:dark:hover:bg-gray-900 md:py-3 md:text-base md:leading-6 md:px-10"
            >
              npm install million
              <DuplicateIcon className="w-6 h-6 ml-2 -mr-3 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-wide text-center text-gray-400 text-opacity-50 uppercase dark:text-gray-500">
            Powered by
          </p>

          <div className="mt-6">
            <div className="flex justify-center filter contrast-50 grayscale dark:opacity-50">
              <Vercel />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <p className="text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl lg:text-center dark:text-white">
          Why Million?
        </p>
        <p className="mx-auto mt-4 text-xl font-medium text-gray-400 lg:max-w-3xl lg:text-xl lg:text-center">
          Million is designed to be <b>modern and easy</b> to use while being{' '}
          <b>lean and insanely performant</b>.
        </p>
        <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {features.map((feature) => (
            <div
              className="p-9 w-auto bg-white shadow-lg rounded-xl dark:bg-opacity-5 "
              key={feature.name}
            >
              <div>
                <feature.icon
                  className="h-9 w-9 dark:text-white rounded-full p-1.5 dark:bg-white dark:bg-opacity-10 bg-black bg-opacity-5 text-black"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold dark:text-white">
                  {feature.name}
                </h3>
                <p className="text-md font-medium text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Container>
          <div className="max-w-sm py-16 mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto ">
              <Link href="/docs/getting-started">
                <a className="flex items-center justify-center w-full px-8 py-3 text-md font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6">
                  Get Started →
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}
