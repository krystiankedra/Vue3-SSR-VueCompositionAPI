<template>
  <v-container>
    <async-page-wrapperv2>
      <template #sort-filter-wrapper>
        <sort-filter-wrapper
          :filter-items="filterItems"
          :sort-items="sortItems"
          :route-key="routeKey"
        />
      </template>
      <template #page-header>
        {{ pageWrapperTitle }}
      </template>
      <template #container>
        <products-wrapperv2 />
      </template>
    </async-page-wrapperv2>
  </v-container>
</template>

<script>
import { useStore } from '~/helpers/useStore'
import { computed, onMounted } from '@vue/composition-api'
import { SET_DATA_STATE_FROM_API } from '~/store/rootActionTypes'
import { getMockProducts } from '~/test/mocks/products'
import { setSortItemsFromProducts, setFilterItemsFromProducts } from '~/management/ProductsManagement/productsManagement'

import { asyncPageWrapperv2 } from '~/management/AsyncComponentManagement/asyncComponents'
import { sortFilterWrapper, productsWrapperv2 } from '~/management/LazyLoadingComponentsManagement/lazyLoadingComponentsManagement'

export default {
  components: {
    asyncPageWrapperv2,
    productsWrapperv2,
    sortFilterWrapper
  },
  setup(props, { root }) {
    const store = useStore()
    const routeKey = root.$route.name

    const pageWrapperTitle = computed(() => store.getters.getListTitle(routeKey).value)

    const sortItems = setSortItemsFromProducts()
    const filterItems = setFilterItemsFromProducts()

    onMounted(async () => {
      await Promise.all([
        store.dispatch(SET_DATA_STATE_FROM_API, { submodule: 'list', routeKey, callback: () => getMockProducts() })
      ])
    })

    return {
      pageWrapperTitle,
      sortItems,
      filterItems,
      routeKey
    }

  }
}
</script>