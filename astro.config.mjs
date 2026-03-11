// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';

import studiocmsUi from '@studiocms/ui';

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [studiocmsUi()],
  site: "https://www.th-dd.top",
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
