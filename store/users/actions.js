import { SET_USERS } from '~/store/rootMutationTypes'
import { getUsers } from '~/api/users/getUsers'

export default {
  setUsers({ commit }) {
    try {
      const response = getUsers()
      commit(SET_USERS, response)
    } catch (error) {
      console.log(error)
    }
  }
}