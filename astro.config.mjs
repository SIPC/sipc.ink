// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';

import studiocmsUi from '@studiocms/ui';

// @ts-ignore
import cloudflare from '@astrojs/cloudflare';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const bgPath = fileURLToPath(new URL('./public/bg.png', import.meta.url));
const bgExists = fs.existsSync(bgPath);

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [studiocmsUi()],
  adapter: cloudflare({
     imageService: 'passthrough'
  }),
  vite: {
    define: {
      __BG_EXISTS__: JSON.stringify(bgExists),
    },
  },
});
