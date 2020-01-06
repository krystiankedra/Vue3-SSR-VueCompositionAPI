import { createVuexConfiguration, createLocalVueConfiguration } from '~/test/configuration'
import { SET_DATA_STATE, FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY } from '~/store/rootMutationTypes'
import { SET_DATA_STATE_FROM_API } from '~/store/rootActionTypes'
import { getMockEmployees, getMockEmployee } from '~/test/mocks/employees'
import lists from '~/store/lists'

describe('lists store module', () => {

  let store
  let state
  let getters
  const submodule = 'list'
  const routeKey = 'employees'
  beforeEach(() => {
    createLocalVueConfiguration()
    store = createVuexConfiguration(lists)
    state = store.state
    getters = store.getters
  })

  it('mutation setDataState (with getters) - setting values ​​and checking if they were set in state', () => {
    const values = {
      'list': { routeKey, value: getMockEmployees(), gettersName: 'getList', checkProperty: 'length' },
      'searchedPhrase': { routeKey, value: 'And', gettersName: 'getSearchedPhrase' },
      'searchedValues': { routeKey, value: ['IT'], gettersName: 'getSearchedValues' },
      'sortedValue': { routeKey, value: 'firstname', gettersName: 'getSortedValue' },
      'listTitle': { routeKey, value: 'New list title', gettersName: 'getListTitle' }
    }
    Object.entries(values).forEach((entries) => {
      const key = entries[0]
      const { routeKey, value } = entries[1]
      store.commit(SET_DATA_STATE, { submodule: key, routeKey, value })
    })
    Object.values(values).forEach((entries) => {
      const { routeKey, value, gettersName, checkProperty } = entries
      checkProperty
        ? expect(getters[gettersName](routeKey).value[checkProperty]).toBe(value[checkProperty])
        : expect(getters[gettersName](routeKey).value).toBe(value)
    })
  })

  it('mutation - setDataState - (with getters) - set a new value for the list submodule for the employee key and check if the object is contained in the list', () => {
    const payload = { submodule, routeKey, value: getMockEmployees() }
    store.commit(SET_DATA_STATE, payload)
    expect(state.list.employees.value.length).toBe(4)

    const { id } = getMockEmployee()
    const isExistMockObjectInGettersList = () => getters.getList(routeKey).value.some(obj => obj.id === id)
    expect(isExistMockObjectInGettersList()).toBeTruthy()
  })

  it('mutation - filterDataStateListByPropertyKey - (with getters) - set a new value for the list submodule for the employee key and check the filtered values ​​match the filtering criteria', () => {
    const payload = { submodule, routeKey, value: getMockEmployees() }
    store.commit(SET_DATA_STATE, payload)
    expect(state.list.employees.value.length).toBe(4)

    const key = 'id'
    const { id } = getMockEmployee()
    const filterPayload = { submodule, routeKey, key, value: id }
    store.commit(FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY, filterPayload)
    const isExistMockObjectInGettersList = () => getters.getList(routeKey).value.some(obj => obj.id === id)
    expect(isExistMockObjectInGettersList()).toBeFalsy()
  })

  it('action - setDataStateFromApi - (with getters) - set a new value for the list submodule for the employee key and check if the object is contained in the list', async () => {
    await store.dispatch(SET_DATA_STATE_FROM_API, { submodule, routeKey, callback: () => getMockEmployees() })
    expect(getters.getList(routeKey).value.length).toBe(4)

    const { id } = getMockEmployee()
    const isExistMockObjectInGettersList = () => getters.getList(routeKey).value.some(obj => obj.id === id)
    expect(isExistMockObjectInGettersList()).toBeTruthy()
  })

})