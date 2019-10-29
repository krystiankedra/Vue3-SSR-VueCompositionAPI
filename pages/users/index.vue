<template>
  <v-container>
    <new-user :add-new-user="addNewUser" />
    <users-list
      class="mt-3"
      :users="users"
      :delete-user="deleteUser"
      :change-user-age="changeUserAge"
      :navigate-to-details="navigateToDetails"
    />
  </v-container>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useStore } from '~/helpers/useStore'
import { DELETE_USER, ADD_USER, CHANGE_USER_AGE } from '~/store/rootMutationTypes'
const usersList = () => import('~/components/UsersList/usersList')
const newUser = () => import('~/components/NewUser/newUser')
export default {
  components: {
    usersList,
    newUser
  },
  setup(initialProps, { root }) {
    const store = useStore()
    const router = root._router

    const users = computed(() => store.getters.getUsers)

    const deleteUser = id => store.commit(DELETE_USER, id)

    const changeUserAge = (value, id) => store.commit(CHANGE_USER_AGE, { value, id })

    const addNewUser = newUser => store.commit(ADD_USER, newUser)

    const navigateToDetails = id => router.push(`/users/${id}`)

    return {
      users,
      deleteUser,
      changeUserAge,
      addNewUser,
      navigateToDetails
    }
  }
}
</script>