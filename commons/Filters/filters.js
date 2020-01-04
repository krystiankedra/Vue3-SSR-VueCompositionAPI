export const filtersWrapper = (...fns) => item => fns.every(fn => fn(item))

const stopUseFilterWithoutValue = (callback, value) => value && value.length > 0 ? callback() : true

export const filterByPropertyKey = (key, value) => item => {
  const callback = () => String(item[key]).toLocaleLowerCase().includes(value.toLocaleLowerCase())
  return stopUseFilterWithoutValue(callback, value)
}

export const filterByExtendedFlatArraySome = (key, value) => item => {
  const values = value.map(val => val.toLocaleLowerCase())
  const callback = () => item[key].every(arrValue => values.includes(arrValue.toLocaleLowerCase()))
  return stopUseFilterWithoutValue(callback, value)
}

export const filterByNotEqualPropertyKey = (key, value) => item => item[key] !== value
