import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { passthroughImageService } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), react()],
  image: {
    service: passthroughImageService(),
  },
});