import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import {
  transformerDirectives,
  presetIcons,
  presetUno,
  extractorSplit,
  presetTypography
} from "unocss";
import extractorPug from "@unocss/extractor-pug";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Projects made by and with Chromatone",
  description: "Visual Music Language needs to be developed and implemented in many ways. We arrange all this activity in projects, be it performance or education, research or promotion, software or hardware.",
  transformHead({ pageData }) {
    return [
      process.env.NODE_ENV === "production" && ["script", { async: true, defer: true, "data-website-id": "9413be47-a151-49ac-8b1b-09be462f7bc3", src: "https://stats.chromatone.center/script.js" }],

      ["link", { rel: "icon", type: "image/xml+svg", href: "https://projects.chromatone.center/smooth.svg" }],
      ["meta", { name: "author", content: "davay42" }],
      ["meta", { name: "keywords", content: "color, music, stickers, posters, theory, webapp, science" }],
      ["meta", { name: "theme-color", content: '#cccccc' }],
      ['meta', { property: 'og:title', content: pageData.title + ' | Chromatone School' }],
      ['meta', { property: 'og:description', content: pageData.description }],
      ['meta', { property: 'og:url', content: "https://projects.chromatone.center/" + pageData.relativePath.split('index.md')[0] }],
      ['meta', { property: 'og:image', content: `https://projects.chromatone.center/smooth.svg` }],
      ['meta', { name: 'twitter:title', content: pageData.title + ' | Chromatone Projects' }],
      ['meta', { name: 'twitter:description', content: pageData.description }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: `@davay42` }],
      ['meta', { name: 'twitter:creator', content: `@davay42` }],
      ['meta', { name: 'twitter:image', content: `https://projects.chromatone.center/preview.png` }],
    ]
  },
  vite: {
    plugins: [
      UnoCSS({
        transformers: [transformerDirectives()],
        presets: [
          presetIcons({
            // cdn: 'https://esm.sh/',
            scale: 1.2,
            extraProperties: {
              "vertical-align": "middle",
            },
          }),
          presetUno(),
          presetTypography(),
        ],
        extractors: [extractorSplit, extractorPug()],
      }),
    ],
  }

})



