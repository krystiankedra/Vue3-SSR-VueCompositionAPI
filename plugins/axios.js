import { SET_ERROR } from '~/store/errors/mutationTypes'

export default ({ $axios, store }, inject) => {
  const api = $axios.create({
    baseURL: process.env.baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  api.onError((error) => {
    const correctErrorType = error.response || error.request
    if (correctErrorType) {
      store.commit(SET_ERROR, correctErrorType)
    }
  })

  inject('api', api)
}
