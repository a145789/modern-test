import appTools, { defineConfig } from '@modern-js/app-tools';
import ssgPlugin from '@modern-js/plugin-ssg';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  output: {
    ssg: true,
    disableSourceMap: true,
    assetPrefix: './',
    distPath: {
      html: '',
    },
  },
  html: {
    title: 'resume',
    disableHtmlFolder: true,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
    ssgPlugin(),
  ],
});
