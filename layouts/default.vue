<template>
  <v-app>
    <v-container>
      <new-user :add-new-user="addNewUser" />
      <users-list
        :users="state.users"
        :delete-user="deleteUser"
        :change-user-age="changeUserAge"
      />
    </v-container>
  </v-app>
</template>

<script>
import { reactive, computed } from '@vue/composition-api'
import { deleteUserFromList, changeUserAgeInList } from '~/UsersManagement/usersManagement'
import usersList from '~/components/UsersList/usersList'
import newUser from '~/components/NewUser/newUser'
export default {
  components: {
    usersList,
    newUser
  },
  setup(initialProps, setupContext) {
    const state = reactive({
      users: [
        { id: 1, name: 'Krystian', lastname: 'Kędra', age: '24' },
        { id: 2, name: 'Paweł', lastname: 'Nowak', age: '27' },
        { id: 3, name: 'Mateusz', lastname: 'Jurasiek', age: '21' }
      ]
    })

    const deleteUser = id => state.users = deleteUserFromList(state.users, id)

    const changeUserAge = (value, id) => changeUserAgeInList(state.users, value, id)

    const addNewUser = newUser => state.users = [...state.users, newUser]

    return {
      state,
      deleteUser,
      changeUserAge,
      addNewUser
    }
  }
}
</script>
