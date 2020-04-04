export default {
  setUserAuth(state, payload) {
    state.isAuth = payload
  },
  setUserToken(state, payload) {
    state.token = payload
  }
}
