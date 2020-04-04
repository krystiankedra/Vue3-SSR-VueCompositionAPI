import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import errors from './errors'
import posts from './posts'
import root from './root'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      errors,
      posts,
      root
    }
  })
}

export default createStore
