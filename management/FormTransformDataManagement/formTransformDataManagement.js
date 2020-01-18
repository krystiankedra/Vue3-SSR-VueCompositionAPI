export const changeFieldType = (type) => {
  switch (type) {
    case 'shortText': {
      return 'inputEmitter'
    }
    case 'dropdown': {
      return 'dropDownEmitter'
    }
  }
}
