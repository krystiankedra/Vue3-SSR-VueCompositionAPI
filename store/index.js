import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import errors from './errors'
import posts from './posts'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      errors,
      posts
    }
  })
}

export default createStore
