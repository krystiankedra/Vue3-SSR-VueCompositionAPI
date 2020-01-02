import { filterByPropertyKey, filterByExtendedFlatArraySome, filtersWrapper } from '~/commons/Filters/filters'
import { sortByKey } from '~/commons/Sortings/sortings'

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
  return array.filter(filters)
}

export const sortEmployees = (array, sortedValue) =>
  [...array].sort((prev, next) => sortByKey(prev, next, sortedValue))
