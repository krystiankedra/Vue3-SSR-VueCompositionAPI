<template>
  <v-content>
    <v-layout row wrap>
      <v-flex xs6 class="px-2">
        <v-autocomplete v-model="state.sortBy" :items="itemsToSort" label="Sorted by..." />
      </v-flex>
      <v-flex xs6 class="px-2">
        <v-text-field xs10 v-model="state.phrase" label="Search in users..." />
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6 v-for="(user, index) in sortedUsersList" :key="index" class="pa-2">
        <user-details
          :user="user"
          :change-user-age="changeUserAge"
          :delete-user="deleteUser"
          :navigate-to-details="navigateToDetails"
        />
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import { computed, reactive, onMounted, ref } from '@vue/composition-api'
import { filteredUsersByCondition, sortUsersByKey } from '~/UsersManagement/usersManagement'
const userDetails = () => import('~/components/UserDetails/userDetails')
export default {
  components: {
    userDetails
  },
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
    },
    navigateToDetails: {
      type: Function,
      default: () => null
    }
  },
  setup(initialProps, setupContext) {
    const itemsToSort = ref(['name', 'lastname'])

    const state = reactive({
      phrase: '',
      sortBy: 'name'
    })

    const filteredUsers = () => initialProps.users.filter(filteredUsersByCondition(state.phrase))

    const sortedUsersList = computed(() => filteredUsers().sort(sortUsersByKey(state.sortBy)))

    return {
      state,
      sortedUsersList,
      itemsToSort
    }
  }
}
</script>