export default {
  getUsers: state => state.users,
  getUserById: state => id => state.users.find(user => user.id === id)
}