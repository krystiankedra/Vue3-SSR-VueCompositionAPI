import { deleteUserFromList, changeUserAgeInList } from '~/UsersManagement/usersManagement'

export default {
  setUsers(state, payload) {
    state.users = payload
  },
  deleteUser(state, payload) {
    state.users = deleteUserFromList(state.users, payload)
  },
  addUser(state, payload) {
    state.users = [...state.users, payload]
  },
  changeUserAge(state, { value, id }) {
    changeUserAgeInList(state.users, value, id)
  }
}