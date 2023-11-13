import eslintVitePlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    ["@nuxtjs/google-fonts", {
      families: {
        "Work+Sans": [300, 400, 500, 600, 700]
      }
    }]
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      charset: "utf-8"
    }
  },
  imports: {
    dirs: ["./stores"]
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"]
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      BASE_URL: process.env.BASE_URL
    }
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
