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
        <employees-wrapperv2 />
      </template>
    </page-wrapperv2>
  </v-container>
</template>

<script>
import { useStore } from '~/helpers/useStore'
import { computed } from '@vue/composition-api'
import { setFilterItemsFromEmployees, setSortItemsFromEmployees } from '~/management/EmployeesManagement/employeesManagement'

const pageWrapperv2 = () => import('~/components/Presentionals/Wrappers/PageWrapperv2/pageWrapperv2')
const employeesWrapperv2 = () => import('~/components/Containers/EmployeesWrapperv2/employeesWrapperv2')
const sortFilterWrapper = () => import('~/components/Shared/SortFilterWrapper/sortFilterWrapper')

export default {
  components: {
    pageWrapperv2,
    employeesWrapperv2,
    sortFilterWrapper
  },
  setup(props, { root }) {
    const store = useStore()
    const routeKey = root.$route.name

    const pageWrapperTitle = computed(() => store.getters.getListTitle(routeKey))
    const employees = computed(() => store.getters.getList(routeKey))
    const filterItems = computed(() => setFilterItemsFromEmployees([...employees.value]))
    const sortItems = setSortItemsFromEmployees()

    return {
      pageWrapperTitle,
      routeKey,
      filterItems,
      sortItems
    }

  }
}
</script>