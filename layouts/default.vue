<template>
  <v-app>
    <v-content>
      <no-ssr>
        <nuxt />
      </no-ssr>
      <bottom-navigation />
    </v-content>
  </v-app>
</template>

<script>
import { provideStore } from '~/helpers/useStore'

const bottomNavigation = () => import('~/components/Presentations/BottomNavigation/bottomNavigation')

export default {
  components: {
    bottomNavigation
  },
  setup(initialProps, { root: { $store } }) {
    provideStore($store)
  }
}
</script>