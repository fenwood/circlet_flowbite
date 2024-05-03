import { defineConfig } from "astro/config";
import cloudflare from '@astrojs/cloudflare'
import tailwind from "@astrojs/tailwind";

const owner = "astrojs";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});
