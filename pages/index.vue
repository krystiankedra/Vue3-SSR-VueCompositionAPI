<template>
  <login :set-layout="setLayout" />
</template>

<script>
import { login } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
import layoutProviderFactory from '~/mixins/Factories/LayoutProviderFactory/layoutProviderFactory'

export default {
  components: {
    login
  },
  mixins: [
    layoutProviderFactory()
  ]
}
</script>
