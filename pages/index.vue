<template>
  <login />
</template>

<script>
import providerLayoutFactory from '~/mixins/Factories/ProviderLayoutFactory/providerLayoutFactory'
import { login } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    login
  },
  mixins: [
    providerLayoutFactory()
  ]
}
</script>
