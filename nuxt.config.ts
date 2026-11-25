export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: true,
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: { configPath: '~~/tailwind.config.js' },
  css: ['~/assets/styles/main.css'],
  nitro: {
    preset: 'static',
    prerender: { routes: ['/'] },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Produk | PT Suryamas Jaya Internasional',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap',
        },
      ],
    },
  },
})