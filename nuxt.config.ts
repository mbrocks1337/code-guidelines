// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-aos",
  ],
  devtools: {
    enabled: false,
  },
  colorMode: {
    classSuffix: "",
    disableTransition: true,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    baseURL: "/code-guidelines/",
    head: {
      title: "Coding Guidelines",
      link: [{ rel: "icon", href: "/code-guidelines/favicon.ico" }],
      meta: [{ name: "robots", content: "noindex" }],
    },
  },
  ssr: false,
  experimental: {
    typedPages: true,
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
  aos: {
    once: true,
  },
});
