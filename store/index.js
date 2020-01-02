import Vuex from 'vuex'
import lists from './lists'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      lists
    }
  })
}

export default createStore