// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    experimental: {
      database: true
    },
    database: {
      // default: {
      //   connector: 'sqlite',
      //   options: { name: 'app' }  // 存到 .data/app.sqlite
      // },
      postgresql: {
        connector: 'postgresql',
        options: {
          url: 'postgresql://postgres:EyplthWmpLnWxBowZbawRDITktdEDOaR@altaria.proxy.rlwy.net:14059/railway'
        }
      },
    }
  },
})