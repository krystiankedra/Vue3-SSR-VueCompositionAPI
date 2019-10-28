<template>
  <v-content>
    <v-layout row wrap>
      <v-flex xs6 class="px-2">
        <v-autocomplete v-model="state.sortBy" :items="['name', 'lastname']" label="Sorted by..." />
      </v-flex>
      <v-flex xs6 class="px-2">
        <v-text-field xs10 v-model="state.phrase" label="Search in users..." />
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6 v-for="({ id, name, lastname, age }, index) in usersByCriteria" :key="index" class="pa-2">
        <v-card>
          <v-card-title class="blue darken-4 white--text headline">
            <p>Name: {{ name }}</p>
            <v-spacer />
            <p>Lastname: {{ lastname }}</p>
          </v-card-title>
          <v-card-text>
            <p>id: {{ id }}</p>
            <v-text-field
              :value="age"
              :label="`Age: ${name} - ${lastname}`"
              @input="(value) => changeUserAge(value, id)"
            />
            <v-spacer />
            <v-btn color="blue darken-4 white--text" @click="() => deleteUser(id)">Delete User</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import { computed, reactive } from '@vue/composition-api'
import { filteredUsersByCondition, sortUsersByKey } from '~/UsersManagement/usersManagement'
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    },
    deleteUser: {
      type: Function,
      default: () => null
    },
    changeUserAge: {
      type: Function,
      default: () => null
    }
  },
  setup(initialProps, setupContext) {
    const state = reactive({
      phrase: '',
      sortBy: 'name'
    })

    const filteredUsers = () => initialProps.users.filter(filteredUsersByCondition(state.phrase))

    const usersByCriteria = computed(() => filteredUsers().sort(sortUsersByKey(state.sortBy)))

    return {
      state,
      usersByCriteria
    }
  }
}
</script>