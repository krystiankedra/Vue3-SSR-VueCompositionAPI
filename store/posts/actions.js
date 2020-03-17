import { SET_POSTS } from '~/store/posts/mutationTypes'
import { getAuthorPostFromState } from '~/commons/Management/Posts/posts'
import { fetchPosts, fetchCommentsWithAuthorForPosts } from '~/commons/Api/Posts/posts'

export default {
  async getPosts({ rootState, commit }) {
    const { $api } = this
    const callback = ({ post }) => getAuthorPostFromState({ posts: rootState.posts.posts, post })
    const posts = await fetchPosts({ $api })
    const iterator = fetchCommentsWithAuthorForPosts({ $api, posts, callback })
    for await (const post of iterator) {
      commit(SET_POSTS, post)
    }
  }
}
