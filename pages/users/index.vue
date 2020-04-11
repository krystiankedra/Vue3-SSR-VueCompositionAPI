<template>
  <users-wrapper />
</template>

<script>
import { usersWrapper } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
import { provideUsersService } from '~/common/Services/Users/setup'
import layoutProviderFactory from '~/mixins/Factories/LayoutProviderFactory/layoutProviderFactory'

export default {
  components: {
    usersWrapper
  },
  middleware: ['Client/Auth/auth'],
  mixins: [
    layoutProviderFactory()
  ],
  setup(_, { root: { $api } }) {
    provideUsersService({ $api })
  }
}
</script>
