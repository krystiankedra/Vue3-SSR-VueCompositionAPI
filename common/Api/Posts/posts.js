export const fetchPosts = async (payload) => {
    const { $api } = payload
    const response = await $api.get(`posts`)
    return response.data
}

export const fetchComments = async (payload) => {
  const { $api, id } = payload
  const response = await $api.get(`comments?postId=${id}`)
  return response.data
}

export const fetchUser = async (payload) => {
  const { $api, userId } = payload
  const response = await $api.get(`users/${userId}`)
  return response.data
}

export async function *fetchCommentsWithAuthorForPosts(payload) {
  const { $api, posts, callback } = payload
  for (const post of posts) {
    const { id, userId } = post
    const [ author, comments ] = await Promise.all([
      (callback && callback({ post })) ?? fetchUser({ $api, userId }),
      fetchComments({ $api, id })
    ])
    yield {
      ...post,
      comments,
      author
    }
  }
}
