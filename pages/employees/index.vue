<template>
  <v-container>

    <sort-filter-wrapper
      :filter-items="filterItems"
      :sort-items="sortItems"
      :route-key="routeKey"
    />

    <v-layout mb-4>
      <v-content>
        <button-wrapper :options="{ handler: toggle, class: 'blue darken-4 white--text' }">
          <template #btn-text>
            Toggle
          </template>
        </button-wrapper>
        <span>
          {{ filteredListInformation }}
        </span>
      </v-content>
    </v-layout>

    <async-page-wrapper v-if="show" :items="sortedEmployees">
      <template #page-header>
        {{ pageWrapperTitle }}
      </template>
      <template #title-content="{ item: { firstname } }">
        Firstname: {{ firstname }}
      </template>
      <template #dynamic-content="{ item: { lastname, hobbies } }">
        <p>Lastname: {{ lastname }}</p>
        <p>Hobbies: {{ hobbies.join() }}</p>
      </template>
      <template #delete-btn="{ item: { id } }">
        <button-wrapper :options="{ handler: () => removeEmployeeFromList(id), class: 'red white--text' }">
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
import { computed, ref, onMounted } from '@vue/composition-api'
import { FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY } from '~/store/rootMutationTypes'
import { SET_DATA_STATE_FROM_API } from '~/store/rootActionTypes'
import { useToggle } from '~/components/Functionals/useToggle'
import { getMockEmployees } from '~/test/mocks/employees'
import {
  filterEmployees,
  setFilterItemsFromEmployees,
  sortEmployees,
  setSortItemsFromEmployees,
  setInformationAboutFilteredListState
} from '~/management/EmployeesManagement/employeesManagement'

import { asyncPageWrapper } from '~/management/AsyncComponentManagement/asyncComponents'
import { sortFilterWrapper, buttonWrapper } from '~/management/LazyLoadingComponentsManagement/lazyLoadingComponentsManagement'

export default {
  components: {
    asyncPageWrapper,
    sortFilterWrapper,
    buttonWrapper
  },
  setup(props, { root }) {
    const store = useStore()
    const routeKey = root.$route.name

    const { show, toggle } = useToggle()

    const filteredListInformation = computed(() => setInformationAboutFilteredListState(searchedPhrase.value, searchedValues.value))

    const pageWrapperTitle = computed(() => store.getters.getListTitle(routeKey).value)
    const employees = computed(() => store.getters.getList(routeKey).value)
    const searchedPhrase = computed(() => store.getters.getSearchedPhrase(routeKey).value)
    const searchedValues = computed(() => store.getters.getSearchedValues(routeKey).value)
    const sortedValue = computed(() => store.getters.getSortedValue(routeKey).value)

    const filterItems = computed(() => setFilterItemsFromEmployees([...employees.value]))
    const sortItems = setSortItemsFromEmployees()

    const filteredEmployees = computed(() => filterEmployees(employees.value, searchedPhrase.value, searchedValues.value))
    const sortedEmployees = computed(() => sortEmployees(filteredEmployees.value, sortedValue.value))

    const removeEmployeeFromList = id => store.commit(FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY, {
      submodule: 'list',
      routeKey,
      key: 'id',
      value: id
    })

    onMounted(async () => {
      await Promise.all([
        store.dispatch(SET_DATA_STATE_FROM_API, { submodule: 'list', routeKey, callback: () => getMockEmployees() })
      ])
    })

    return {
      routeKey,
      show,
      toggle,
      filterItems,
      sortItems,
      pageWrapperTitle,
      sortedEmployees,
      removeEmployeeFromList,
      filteredListInformation
    }

  }
}
</script>