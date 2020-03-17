import en from './locales/en'
import pl from './locales/pl'

export default () => ([
  'nuxt-i18n', {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en,
        pl
      }
    }
  }
])
