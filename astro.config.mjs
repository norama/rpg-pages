import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    solid(),
    {
      name: 'importmap-externals',

      hooks: {
        'astro:build:setup': ({ vite, target }) => {
          if (target === 'client') {
            vite.build.rollupOptions['external'] = ['solid-js', '@modular-forms/solid']
          }
        },
      },
    },
  ],
})
