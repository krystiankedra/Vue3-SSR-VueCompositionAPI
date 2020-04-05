<template>
  <client-only>
    <v-app>
      <v-content>
        <v-container fluid>
          <application-management-wrapper />
          <nuxt />
        </v-container>
      </v-content>
    </v-app>
  </client-only>
</template>


<script>
import { applicationManagementWrapper } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
import { provideStore } from '~/common/StoreInjector/storeInjector'

export default {
  components: {
    applicationManagementWrapper
  },
  setup(_, { root: { $store } }) {
    provideStore($store)
  }
}
</script>
