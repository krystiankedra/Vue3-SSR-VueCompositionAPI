import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      dark: false,
      default: false,
      themes: {
        light: {
          'primary-combox-chip': colors.shades.black,
          'primary-input-label': colors.shades.black,
          'primary-background': colors.shades.white,
          'primary-card-header': colors.blue.darken4,
          'primary-card-header-text': colors.shades.white,
          'primary-card-text': colors.shades.black,
          'secondary-card-header': colors.grey.darken1,
          'primary-expansion-panel': colors.grey.darken1,
          'primary-expansion-panel-header-text': colors.shades.white,
          'primary-expansion-panel-header-icon': colors.shades.white,
          'primary-snackbar-text': colors.shades.white,
          'primary-text-on-background': colors.shades.white,
          'primary-icon-on-background': colors.shades.white,
          'primary-button-background': colors.blue.darken4,
          'primary-button-text-on-background': colors.shades.white
        },
        dark: {
          'black': {
            'primary-combox-chip': colors.shades.white,
            'primary-input-label': colors.shades.white,
            'primary-background': colors.shades.black,
            'primary-card-header': colors.shades.black,
            'primary-card-header-text': colors.shades.white,
            'primary-card-text': colors.shades.white,
            'secondary-card-header': colors.shades.black,
            'primary-expansion-panel': colors.shades.black,
            'primary-expansion-panel-header-text': colors.shades.white,
            'primary-expansion-panel-header-icon': colors.shades.white,
            'primary-snackbar-text': colors.shades.white,
            'primary-text-on-background': colors.shades.white,
            'primary-icon-on-background': colors.shades.white,
            'primary-button-background': colors.shades.black,
            'primary-button-text-on-background': colors.shades.white
          },
          'yellow': {
            'primary-combox-chip': colors.yellow.accent2,
            'primary-input-label': colors.yellow.accent2,
            'primary-background': colors.yellow.accent2,
            'primary-card-header': colors.yellow.accent2,
            'primary-card-header-text': colors.shades.black,
            'primary-card-text': colors.shades.black,
            'secondary-card-header': colors.yellow.accent2,
            'primary-expansion-panel': colors.yellow.accent2,
            'primary-expansion-panel-header-text': colors.shades.black,
            'primary-expansion-panel-header-icon': colors.shades.black,
            'primary-snackbar-text': colors.shades.white,
            'primary-text-on-background': colors.shades.black,
            'primary-icon-on-background': colors.shades.black,
            'primary-button-background': colors.shades.black,
            'primary-button-text-on-background': colors.yellow.accent2
          }
        }
      }
    }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
