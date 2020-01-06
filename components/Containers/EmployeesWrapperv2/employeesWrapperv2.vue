<template>
  <v-layout row wrap>
    <v-flex v-for="(employee, idx) in sortedEmployees" :key="idx" xs12 md4 px-2 py-2>
      <employeev2 :employee="employee" :remove-employee-from-list="removeEmployeeFromList" />
    </v-flex>
  </v-layout>
</template>

<script>
import { useStore } from '~/helpers/useStore'
import { computed } from '@vue/composition-api'
import { FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY } from '~/store/rootMutationTypes'
import { filterEmployees, sortEmployees } from '~/management/EmployeesManagement/employeesManagement'

const employeev2 = () => import('~/components/Containers/EmployeesWrapperv2/Employeev2/employeev2')

export default {
  components: {
    employeev2
  },
  setup(props, { root }) {
    const store = useStore()
    const routeKey = root.$route.name

    const employees = computed(() => store.getters.getList(routeKey).value)
    const searchedPhrase = computed(() => store.getters.getSearchedPhrase(routeKey).value)
    const searchedValues = computed(() => store.getters.getSearchedValues(routeKey).value)
    const sortedValue = computed(() => store.getters.getSortedValue(routeKey).value)

    const filteredEmployees = computed(() => filterEmployees(employees.value, searchedPhrase.value, searchedValues.value))
    const sortedEmployees = computed(() => sortEmployees(filteredEmployees.value, sortedValue.value))

    const removeEmployeeFromList = id => store.commit(FILTER_DATA_STATE_LIST_BY_PROPERTY_KEY, {
      submodule: 'list',
      routeKey,
      key: 'id',
      value: id
    })

    return {
      sortedEmployees,
      removeEmployeeFromList
    }
  }
}
</script>