<template>
  <page-wrapper>
    <template #page-title>
      <span class="headline primary-card-header-text--text">
        {{ $t('users.pageTitle') }}
      </span>
    </template>
    <template #page-content>
      <v-layout row wrap>
        <v-flex v-for="(user, idx) in users" :key="idx" xs12 md6 pt-2 px-2>
          <post-author :author="user" />
        </v-flex>
      </v-layout>
    </template>
  </page-wrapper>
</template>

<script>
import { useUsersService } from '~/common/Services/Users/setup'
import { pageWrapper, postAuthor } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
import { computed, onMounted } from '@vue/composition-api'

export default {
  components: {
    pageWrapper,
    postAuthor
  },
  setup() {
    const usersService = useUsersService()

    const users = computed(() => usersService.users)

    onMounted(async () => {
      await usersService.fetch()
    })

    return {
      users
    }
  }
}
</script>
