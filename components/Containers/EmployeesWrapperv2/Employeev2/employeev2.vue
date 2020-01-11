<template>
  <v-card>
    <v-card-title class="blue darken-4 white--text">
      Firstname: {{ employee.firstname }}
    </v-card-title>
    <v-card-text>
      <p>Lastname: {{ employee.lastname }}</p>
      <p>Hobbies: {{ employee.hobbies.join() }}</p>
    </v-card-text>
    <v-card-actions>
      <button-wrapper :options="{ handler: () => removeEmployeeFromList(employee.id), class: 'red white--text' }">
        <template #btn-text>
          Remove
        </template>
      </button-wrapper>
    </v-card-actions>
  </v-card>
</template>

<script>
import { buttonWrapper } from '~/management/LazyLoadingComponentsManagement/lazyLoadingComponentsManagement'

export default {
  components: {
    buttonWrapper
  },
  props: {
    removeEmployeeFromList: {
      type: Function,
      default: () => null
    },
    employee: {
      type: Object,
      default: () => {}
    }
  }
}
</script>