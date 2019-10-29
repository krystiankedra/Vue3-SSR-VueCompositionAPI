<template>
  <v-container>
    <user-details
      :user="user()"
      :is-visible-action-button="isVisibleActionButton"
      :navigate-back="navigateBack"
      :change-user-age="changeUserAge"
    />
  </v-container>
</template>

<script>
import { useStore } from '~/helpers/useStore'
import { computed, ref } from '@vue/composition-api'
import { CHANGE_USER_AGE } from '~/store/rootMutationTypes'
const userDetails = () => import('~/components/UserDetails/userDetails')
export default {
  components: {
    userDetails
  },
  setup(initialProps, { root: { _route, _router } }) {
    const store = useStore()

    const isVisibleActionButton = ref(false)
    const id = _route.params.id
    const user = () => store.getters.getUserById(Number(id))

    const navigateBack = () => _router.push('/users')

    const changeUserAge = (value, id) => store.commit(CHANGE_USER_AGE, { value, id })

    return {
      user,
      navigateBack,
      changeUserAge,
      isVisibleActionButton
    }
  }
}
</script>