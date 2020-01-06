import { filtersWrapper, filterByPropertyKey, filterByExtendedFlatArraySome } from '~/commons/Filters/filters'
import { getMockEmployees, getMockEmployee } from '~/test/mocks/employees'

describe('filtersWrapper', () => {
  const factory = () => getMockEmployees()

  it('without functions has not side effects', () => {
    const filters = filtersWrapper()
    const result = factory().filter(filters)
    expect(factory().length).toBe(result.length)
  })

  it('with multiple filterByPropertyKey functions', () => {
    const { firstname, lastname } = getMockEmployee()
    const filters = filtersWrapper(
      filterByPropertyKey('firstname', firstname),
      filterByPropertyKey('lastname', lastname)
    )
    const result = factory().filter(filters)
    expect(result.length).toBe(1)
  })

  it('with multiple functions', () => {
    const { firstname, lastname, hobbies } = getMockEmployee()
    const filters = filtersWrapper(
      filterByPropertyKey('firstname', firstname),
      filterByExtendedFlatArraySome('hobbies', hobbies),
      filterByPropertyKey('lastname', lastname)
    )
    const result = factory().filter(filters)
    const correctResult = result.find(x => x.firstname === firstname).hobbies.includes(hobbies[0])
    expect(result.length).toBe(1)
    expect(correctResult).toBeTruthy()
  })

})
