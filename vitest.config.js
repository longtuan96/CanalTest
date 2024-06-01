import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      ],
      coverage: {
        exclude: [
          '**/.storybook/**',
          '**/.eslintrc.cjs',
          '**/vite-env.d.ts',
          '**/postcss.config.js',
          '**/tailwind.config.js',
        ],
      },
      setupFiles: './src/test/testSetup.ts',
    },
  })
);
