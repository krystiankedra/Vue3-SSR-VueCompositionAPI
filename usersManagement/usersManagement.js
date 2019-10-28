export const deleteUserFromList = (users, id) => users.filter(filterByUserId(id))

const filterByUserId = id => user => user.id !== id

export const changeUserAgeInList = (users, value, id) => users.map(changeAgeInUpdatedUser(value, id))

const changeAgeInUpdatedUser = (value, id) => user => {
  user.age = user.id === id ? value : user.age
  return user
}

export const filteredUsersByCondition = phrase => user =>
  user.name.toLocaleLowerCase().includes(phrase.toLocaleLowerCase()) ||
    user.lastname.toLocaleLowerCase().includes(phrase.toLocaleLowerCase())

const generateId = () => Math.floor(Math.random() * 1000000) + 1

export const defaultUserObject = () => {
  return { id: generateId(), name: '', lastname: '', age: '' }
}

const assignValueToKeyInUserObject = newUserData => keyValueData => {
  const key = keyValueData[0]
  const valueFromKey = newUserData.find(newUser => newUser.key === key)
  if (valueFromKey) keyValueData[1] = valueFromKey.value
  return keyValueData
}

export const prepareUserObjectToSend = (defaultObject, newUserData) => {
  const assignedValueToKeyInUserObject = Object.entries(defaultObject).map(assignValueToKeyInUserObject(newUserData))
  return Object.fromEntries(assignedValueToKeyInUserObject)
}

export const sortUsersByKey = key => (prev, next) =>
  prev[key].toLocaleLowerCase() > next[key].toLocaleLowerCase() ? 1 : -1
