// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  ssr: false,
  experimental: {
    typedPages: true,
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
