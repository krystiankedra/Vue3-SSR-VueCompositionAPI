<template>
  <v-container>

    <sort-filter-wrapper
      :filter-items="filterItems"
      :sort-items="sortItems"
      :route-key="routeKey"
    />

    <page-wrapper :items="sortedProducts">
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
    </page-wrapper>
  </v-container>
</template>

<script>
import { useStore } from '~/helpers/useStore'
import { computed } from '@vue/composition-api'
import { FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY } from '~/store/rootMutationTypes'
import {
  setSortItemsFromEmployees,
  setFilterItemsFromProducts,
  filterProducts,
  sortProducts
} from '~/management/ProductsManagement/productsManagement'

const pageWrapper = () => import('~/components/Presentionals/Wrappers/PageWrapper/pageWrapper')
const buttonWrapper = () => import('~/components/Shared/CustomButton/customButton')
const sortFilterWrapper = () => import('~/components/Shared/SortFilterWrapper/sortFilterWrapper')

export default {
  components: {
    pageWrapper,
    buttonWrapper,
    sortFilterWrapper
  },
  setup(props, { root }) {
    const store = useStore()
    const routeKey = root.$route.name

    const sortItems = setSortItemsFromEmployees()
    const filterItems = setFilterItemsFromProducts()

    const pageWrapperTitle = computed(() => store.getters.getListTitle(routeKey))
    const products = computed(() => store.getters.getList(routeKey))
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