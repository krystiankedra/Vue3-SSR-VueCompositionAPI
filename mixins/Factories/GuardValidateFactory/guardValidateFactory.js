const guardValidateFactory = () => ({
  validate({ store }) {
    return store.getters.isAuth
  }
})

export default guardValidateFactory
