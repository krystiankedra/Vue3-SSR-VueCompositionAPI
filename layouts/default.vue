<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
import { provideStore, useStore } from '~/helpers/useStore'
import { SET_USERS } from '~/store/rootActionTypes'
import { onMounted } from '@vue/composition-api'
export default {
  setup(initialProps, { root: { $store } }) {
    provideStore($store)
    const store = useStore()
    onMounted(() => store.dispatch(SET_USERS))
  }
}
</script>