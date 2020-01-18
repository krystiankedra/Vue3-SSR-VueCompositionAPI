export default {
  setFormsDataState(state, { formType, value, idx }) {
    state.formStructureData[formType].value[idx].value = value
  }
}
