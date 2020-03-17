export default {
  setPosts(state, payload) {
    state.posts = [...state.posts, payload]
  },
  clearPosts(state) {
    state.posts = []
  }
}
