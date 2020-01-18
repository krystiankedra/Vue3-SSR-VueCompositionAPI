export default {
  getFormStructureData: state => key => state.formStructureData[key],
  getFormTitle: state => key => state.formTitle[key],
}