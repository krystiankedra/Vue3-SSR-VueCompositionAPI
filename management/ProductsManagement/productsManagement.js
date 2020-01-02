import { filterByPropertyKey, filtersWrapper } from '~/commons/Filters/filters'
import { sortByKey } from '~/commons/Sortings/sortings'

export const setFilterItemsFromProducts = () => ['Rooms', 'items']

export const setSortItemsFromEmployees = () => ['name']

export const filterProducts = (array, searchedPhrase, searchedValues) => {
  const nameKey = 'name'
  const categoryKey = 'category'
  const filters = filtersWrapper(
    filterByPropertyKey(nameKey, searchedPhrase),
    filterByPropertyKey(categoryKey, searchedValues)
  )
  return array.filter(filters)
}

export const sortProducts = (array, sortedValue) =>
  [...array].sort((prev, next) => sortByKey(prev, next, sortedValue))
