import { filtersWrapper, filterByPropertyKey, filterByExtendedFlatArraySome } from '~/commons/Filters/filters'

describe('filtersWrapper', () => {
  const factory = () => [
    { firstname: 'Krystian', age: 25, hobbies: ['IT'] },
    { firstname: 'Dawid', age: 27, hobbies: ['IT2'] }
  ]

  it('without functions has not side effects', () => {
    const filters = filtersWrapper()
    const result = factory().filter(filters)
    expect(factory().length).toBe(result.length)
  })

  it('with multiple filterByPropertyKey functions', () => {
    const filters = filtersWrapper(
      filterByPropertyKey('firstname', 'krystian'),
      filterByPropertyKey('age', '30')
    )
    const result = factory().filter(filters)
    expect(result.length).toBe(0)
  })

  it('with multiple functions', () => {
    const filters = filtersWrapper(
      filterByPropertyKey('firstname', 'Krystian'),
      filterByExtendedFlatArraySome('hobbies', ['IT']),
      filterByPropertyKey('age', '25')
    )
    const result = factory().filter(filters)
    const correctResult = result.find(x => x.firstname === 'Krystian').hobbies.includes('IT')
    expect(result.length).toBe(1)
    expect(correctResult).toBeTruthy()
  })

})
