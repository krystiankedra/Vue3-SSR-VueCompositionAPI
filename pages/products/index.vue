<template>
  <v-container>

    <sort-filter-wrapper
      :filter-items="filterItems"
      :sort-items="sortItems"
      :route-key="routeKey"
    />

    <async-page-wrapper :items="sortedProducts">
      <template #page-header>
        {{ pageWrapperTitle }}
      </template>
      <template #title-content="{ item: { name } }">
        Name: {{ name }}
      </template>
      <template #dynamic-content="{ item: { category } }">
        Category: {{ category }}
      </template>
      <template #delete-btn="{ item: { id } }">
        <button-wrapper :options="{ handler: () => removeProductFromList(id), class: 'grey ligthen-3 white--text' }">
          <template #btn-text>
            Remove
          </template>
        </button-wrapper>
      </template>
    </async-page-wrapper>
  </v-container>
</template>

<script>
import { useStore } from '~/helpers/useStore'
import { computed, onMounted } from '@vue/composition-api'
import { FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY } from '~/store/rootMutationTypes'
import { SET_DATA_STATE_FROM_API } from '~/store/rootActionTypes'
import { getMockProducts } from '~/test/mocks/products'
import {
  setSortItemsFromProducts,
  setFilterItemsFromProducts,
  filterProducts,
  sortProducts
} from '~/management/ProductsManagement/productsManagement'

import { asyncPageWrapper } from '~/management/AsyncComponentManagement/asyncComponents'
import { sortFilterWrapper, buttonWrapper } from '~/management/LazyLoadingComponentsManagement/lazyLoadingComponentsManagement'

export default {
  components: {
    asyncPageWrapper,
    buttonWrapper,
    sortFilterWrapper
  },
  setup(props, { root }) {
    const store = useStore()
    const routeKey = root.$route.name

    const sortItems = setSortItemsFromProducts()
    const filterItems = setFilterItemsFromProducts()

    const pageWrapperTitle = computed(() => store.getters.getListTitle(routeKey).value)
    const products = computed(() => store.getters.getList(routeKey).value)
    const searchedPhrase = computed(() => store.getters.getSearchedPhrase(routeKey).value)
    const searchedValues = computed(() => store.getters.getSearchedValues(routeKey).value)
    const sortedValue = computed(() => store.getters.getSortedValue(routeKey).value)

    const filteredProducts = computed(() => filterProducts(products.value, searchedPhrase.value, searchedValues.value))
    const sortedProducts = computed(() => sortProducts(filteredProducts.value, sortedValue.value))

    const removeProductFromList = id => store.commit(FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY, {
      submodule: 'list',
      routeKey,
      key: 'id',
      value: id
    })

    onMounted(async () => {
      await Promise.all([
        store.dispatch(SET_DATA_STATE_FROM_API, { submodule: 'list', routeKey, callback: () => getMockProducts() })
      ])
    })

    return {
      routeKey,
      pageWrapperTitle,
      sortedProducts,
      removeProductFromList,
      sortItems,
      filterItems
    }

  }
}
</script>