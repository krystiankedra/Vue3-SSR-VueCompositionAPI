<template>
  <client-only>
    <v-app>
      <navigation-wrapper />
      <v-content>
        <v-container fluid>
          <axios-information-wrapper />
          <application-management-wrapper />
          <nuxt />
        </v-container>
      </v-content>
    </v-app>
  </client-only>
</template>

<script>
import {
  applicationManagementWrapper,
  axiosInformationWrapper,
  navigationWrapper
} from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
import { provideStore } from '~/common/CompositionApi/compositionApi'

export default {
  components: {
    applicationManagementWrapper,
    axiosInformationWrapper,
    navigationWrapper
  },
  setup(_, { root: { $store } }) {
    provideStore($store)
  }
}
</script>
