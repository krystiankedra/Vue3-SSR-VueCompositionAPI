<template>
  <login />
</template>

<script>
import providerLayoutFactory from '~/mixins/Factories/ProviderLayoutFactory/providerLayoutFactory'
import { login } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    login
  },
  mixins: [
    providerLayoutFactory()
  ]
}
</script>
