import { createVuexConfiguration, createLocalVueConfiguration } from '~/test/configuration'
import { SET_DATA_STATE, FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY } from '~/store/rootMutationTypes'
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

  it('mutation - setDataState - set a new value for the list submodule for the employee key and check if the object is contained in the list', () => {
    const payload = { submodule, routeKey, value: getMockEmployees() }
    store.commit(SET_DATA_STATE, payload)
    expect(state.list.employees.length).toBe(4)

    const { id } = getMockEmployee()
    const isExistMockObjectInGettersList = () => getters.getList(routeKey).some(obj => obj.id === id)
    expect(isExistMockObjectInGettersList()).toBeTruthy()
  })

  it('mutation - filterDataStateListByPropertyKey - set a new value for the list submodule for the employee key and check the filtered values ​​match the filtering criteria', () => {
    const payload = { submodule, routeKey, value: getMockEmployees() }
    store.commit(SET_DATA_STATE, payload)
    expect(state.list.employees.length).toBe(4)

    const key = 'id'
    const { id } = getMockEmployee()
    const filterPayload = { submodule, routeKey, key, value: id }
    store.commit(FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY, filterPayload)
    const isExistMockObjectInGettersList = () => getters.getList(routeKey).some(obj => obj.id === id)
    expect(isExistMockObjectInGettersList()).toBeFalsy()
  })

})