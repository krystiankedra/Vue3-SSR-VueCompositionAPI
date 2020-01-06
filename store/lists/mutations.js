import { filterByNotEqualPropertyKey, filtersWrapper } from '~/commons/Filters/filters'

export default {
  setDataState(state, { submodule, routeKey, value }) {
    state[submodule][routeKey].value = value
  },
  filterDataStateListByPropertyKey(state, { submodule, routeKey, key, value }) {
    const filters = filtersWrapper(filterByNotEqualPropertyKey(key, value))
    state[submodule][routeKey].value = state[submodule][routeKey].value.filter(filters)
  }
}
