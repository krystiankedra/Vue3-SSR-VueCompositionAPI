<template>
  <v-app>
    <v-content>
      <client-only>
        <nuxt />
      </client-only>
      <bottom-navigation />
    </v-content>
  </v-app>
</template>

<script>
import { provideStore } from '~/helpers/useStore'

const bottomNavigation = () => import('~/components/Presentionals/BottomNavigation/bottomNavigation')

export default {
  components: {
    bottomNavigation
  },
  setup(initialProps, { root: { $store } }) {
    provideStore($store)
  }
}
</script>

<style>
.not-dropdown-wrapper-padding-top {
  padding-top: 18px !important;
}
</style>