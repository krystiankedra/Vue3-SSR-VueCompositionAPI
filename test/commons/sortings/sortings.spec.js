import { sortByPropertyKey } from '~/commons/Sortings/sortings'
import { getMockEmployees } from '~/test/mocks/employees'

describe('sortByPropertyKey', () => {

  const factory = () => getMockEmployees()

  it('set object arrays, select the first object and the last, sorting the first object should be after the last object after calling the function', () => {
    const baseArray = factory()
    const firstObject = baseArray[0]
    const lastObject = baseArray[baseArray.length - 1]
    const key = 'lastname'
    baseArray.sort((prev, next) => sortByPropertyKey(prev, next, key))
    const findIndexFirstObject = baseArray.findIndex(obj => obj.lastname === firstObject.lastname)
    const findIndexSecondObject = baseArray.findIndex(obj => obj.lastname === lastObject.lastname)
    expect(findIndexFirstObject).toBeGreaterThan(findIndexSecondObject)
  })

})