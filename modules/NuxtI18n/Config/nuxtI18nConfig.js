import en from '../Locales/en'
import pl from '../Locales/pl'

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
