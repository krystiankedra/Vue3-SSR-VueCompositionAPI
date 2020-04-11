import { useStore } from '~/common/StoreInjector/storeInjector'
import { useMapGetters } from '~/common/Management/Auth/Auth'
import { computed } from '@vue/composition-api'

const layoutProviderFactory = () => ({
  layout({ store }) {
    return store.getters.isAuth ? 'default' : 'guest'
  },
  setup(_, { root: { $nuxt } }) {
    const store = useStore()

    const mapGetters = () => useMapGetters({ getters: store.getters })

    const isAuth = computed(() => mapGetters().isAuth())

    const layoutName = computed(() => isAuth.value ? 'default': 'guest')

    const setLayout = () => $nuxt.setLayout(layoutName.value)

    return {
      setLayout
    }
  }
})

export default layoutProviderFactory
