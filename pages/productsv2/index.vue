<template>
  <v-container>
    <page-wrapperv2>
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
    </page-wrapperv2>
  </v-container>
</template>

<script>
import { useStore } from '~/helpers/useStore'
import { computed } from '@vue/composition-api'
import { setSortItemsFromEmployees, setFilterItemsFromProducts } from '~/management/ProductsManagement/productsManagement'

const pageWrapperv2 = () => import('~/components/Presentionals/Wrappers/PageWrapperv2/pageWrapperv2')
const productsWrapperv2 = () => import('~/components/Containers/ProductsWrapperv2/productsWrapperv2')
const sortFilterWrapper = () => import('~/components/Shared/SortFilterWrapper/sortFilterWrapper')

export default {
  components: {
    pageWrapperv2,
    productsWrapperv2,
    sortFilterWrapper
  },
  setup(props, { root }) {
    const store = useStore()
    const routeKey = root.$route.name

    const pageWrapperTitle = computed(() => store.getters.getListTitle(routeKey))

    const sortItems = setSortItemsFromEmployees()
    const filterItems = setFilterItemsFromProducts()

    return {
      pageWrapperTitle,
      sortItems,
      filterItems,
      routeKey
    }

  }
}
</script>