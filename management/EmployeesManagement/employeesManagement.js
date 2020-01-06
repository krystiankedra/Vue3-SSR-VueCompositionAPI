import { filterByPropertyKey, filterByExtendedFlatArraySome, filtersWrapper } from '~/commons/Filters/filters'
import { sortByPropertyKey } from '~/commons/Sortings/sortings'

export const setInformationAboutFilteredListState = (phrase, values) =>
  (phrase || values).length > 0 ? 'List is filtered' : 'List is not filtered'

export const setFilterItemsFromEmployees = array => array.reduce((acc, { hobbies }) => {
  acc.push(...new Set(hobbies))
  return acc
} ,[])

export const setSortItemsFromEmployees = () => ['firstname', 'lastname']

export const filterEmployees = (array, searchedPhrase, searchedValues) => {
  const firstnameKey = 'firstname'
  const hobbiesKey = 'hobbies'
  const filters = filtersWrapper(
    filterByPropertyKey(firstnameKey, searchedPhrase),
    filterByExtendedFlatArraySome(hobbiesKey, searchedValues)
  )
  return !!array ? array.filter(filters) : array
}

export const sortEmployees = (array, sortedValue) =>
  !!array ? [...array].sort((prev, next) => sortByPropertyKey(prev, next, sortedValue)) : array
