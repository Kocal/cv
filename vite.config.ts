import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { macroPlugin } from '@builder.io/vite-plugin-macro';
import { partytownVite } from '@builder.io/partytown/utils';
import { join } from 'path';

export default defineConfig(() => {
  return {
    plugins: [
      macroPlugin({ preset: 'pandacss' }),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      partytownVite({ dest: join(__dirname, 'dist', '~partytown') }),
    ],
    dev: {
      headers: {
        'Cache-Control': 'public, max-age=0',
      },
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
