<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6 px-4>
        <nuxtI18n />
      </v-flex>
      <v-flex xs12 md6 px-4>
        <vuetify-themes />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { vuetifyThemes, nuxtI18n } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    vuetifyThemes,
    nuxtI18n
  }
}
</script>
