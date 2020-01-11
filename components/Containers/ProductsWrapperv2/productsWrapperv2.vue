<template>
  <v-layout row wrap>
    <v-flex v-for="(product, idx) in sortedProducts" :key="idx" xs12 md4 px-2 py-2>
      <productv2 :product="product" :remove-product-from-list="removeProductFromList" />
    </v-flex>
  </v-layout>
</template>

<script>
import { useStore } from '~/helpers/useStore'
import { computed } from '@vue/composition-api'
import { FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY } from '~/store/rootMutationTypes'
import { filterProducts, sortProducts } from '~/management/ProductsManagement/productsManagement'

import { productv2 } from '~/management/LazyLoadingComponentsManagement/lazyLoadingComponentsManagement'

export default {
  components: {
    productv2
  },
  setup(props, { root }) {
    const store = useStore()
    const routeKey = root.$route.name

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

    return {
      sortedProducts,
      removeProductFromList
    }

  }
}
</script>