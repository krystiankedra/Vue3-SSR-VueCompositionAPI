export const filtersWrapper = (...fns) => item => fns.every(fn => fn(item))

const stopUseFilterWithoutValue = (fn, value) => value && value.length > 0 ? fn() : true

export const filterByPropertyKey = (key, value) => item =>
  stopUseFilterWithoutValue(() => item[key].toLocaleLowerCase().includes(value.toLocaleLowerCase()), value)

export const filterByExtendedFlatArraySome = (key, value) => item =>
  stopUseFilterWithoutValue(() => item[key].some(arrValue => value.includes(arrValue)), value)

export const filterByNotEqualPropertyKey = (key, value) => item => item[key] !== value
