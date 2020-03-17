const providerLayoutFactory = () => ({
  layout({ store }) {
    return store.getters.isAuth ? 'default' : 'guest'
  }
})

export default providerLayoutFactory
