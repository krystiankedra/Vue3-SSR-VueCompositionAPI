export default {
  getList: state => key => state.list[key],
  getSearchedPhrase: state => key => state.searchedPhrase[key],
  getSearchedValues: state => key => state.searchedValues[key],
  getSortedValue: state => key => state.sortedValue[key],
  getListTitle: state => key => state.listTitle[key]
}