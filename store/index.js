import Vuex from 'vuex'
import lists from './lists'
import forms from './forms'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      lists,
      forms
    }
  })
}

export default createStore