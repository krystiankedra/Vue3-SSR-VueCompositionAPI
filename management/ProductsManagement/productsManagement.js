import { filterByPropertyKey, filtersWrapper } from '~/commons/Filters/filters'
import { sortByPropertyKey } from '~/commons/Sortings/sortings'

export const setFilterItemsFromProducts = () => ['Rooms', 'items']

export const setSortItemsFromProducts = () => ['name']

export const filterProducts = (array, searchedPhrase, searchedValues) => {
  const nameKey = 'name'
  const categoryKey = 'category'
  const filters = filtersWrapper(
    filterByPropertyKey(nameKey, searchedPhrase),
    filterByPropertyKey(categoryKey, searchedValues)
  )
  return !!array ? array.filter(filters) : array
}

export const sortProducts = (array, sortedValue) =>
  !!array ? [...array].sort((prev, next) => sortByPropertyKey(prev, next, sortedValue)) : array
