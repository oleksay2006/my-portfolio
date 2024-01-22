import eslintVitePlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@vueuse/nuxt",
    ["@nuxtjs/google-fonts", {
      families: {
        "Work+Sans": [300, 400, 500, 600, 700]
      }
    }]
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      BASE_URL: process.env.BASE_URL,
      EMAILJS: process.env.EMAILJS
    }
  },
  webpack: {
    optimizeCSS: true
  },
  css: ["@/assets/scss/styles.scss"],
  vite: {
    plugins: [eslintVitePlugin({
      fix: true
    })],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
                        "@import \"@/assets/scss/_variables.scss\"; @import \"@/assets/scss/_mixins.scss\"; @import \"@/assets/scss/_typography.scss\";"
        }
      }
    }
  }
});
