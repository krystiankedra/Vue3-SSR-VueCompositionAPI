import { GET_POSTS } from '~/store/posts/actionTypes'
import { CLEAR_POSTS } from '~/store/posts/mutationTypes'

export const getAuthorPostFromState = (payload) => {
  const { posts, post } = payload
  return posts.find(existedPost => existedPost.userId === post.userId)?.author
}

export const useMapGetters = ({ getters }) => ({
  'posts': () => getters.posts
})

export const useMapMutations = ({ commit }) => ({
  'clearPosts': () => commit(CLEAR_POSTS)
})

export const useMapActions = ({ dispatch }) => ({
  'getPosts': () => dispatch(GET_POSTS)
})
