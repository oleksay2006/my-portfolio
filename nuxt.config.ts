// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt'
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            charset: "utf-8",
        },
    },
    imports: {
        dirs: ['./stores'],
    },
    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
            BASE_URL: process.env.BASE_URL,
        },
    },
    css: ["@/assets/scss/styles.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_mixins.scss";',
                },
            },
        },
    },
})
