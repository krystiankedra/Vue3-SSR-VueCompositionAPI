<template>
  <v-layout row wrap>
    <v-flex xs12 md4 px-2 class="searched-phrase-wrapper-paddding">
      <input-emitter :item.sync="searchedPhrase" />
    </v-flex>
    <v-flex xs12 md4 px-2>
      <drop-down-emitter :item.sync="searchedValues" />
    </v-flex>
    <v-flex xs12 md4 px-2>
      <drop-down-emitter :item.sync="sortedValue" :is-disabled="isDisabledSortEmitter" />
    </v-flex>
  </v-layout>
</template>

<script>
import { useStore } from '~/helpers/useStore'
import { computed } from '@vue/composition-api'
import { SET_DATA_STATE } from '~/store/rootMutationTypes'

const inputEmitter = () => import('~/components/Shared/Emitters/InputEmitter/inputEmitter')
const dropDownEmitter = () => import('~/components/Shared/Emitters/DropDownEmitter/dropDownEmitter')

export default {
  components: {
    inputEmitter,
    dropDownEmitter
  },
  props: {
    filterItems: {
      type: Array,
      default: () => []
    },
    sortItems: {
      type: Array,
      default: () => []
    },
    routeKey: {
      type: String,
      default: () => '',
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const routeKey = props.routeKey

    const searchedPhrase = computed({
      get: () => {
        const { label, placeholder, value } = store.getters.getSearchedPhrase(routeKey)
        return {
          label,
          placeholder,
          value
        }
      },
      set: (value) => store.commit(SET_DATA_STATE, { submodule: 'searchedPhrase', routeKey, value })
    })

    const searchedValues = computed({
      get: () => {
        const { label, placeholder, value, isMultiple } = store.getters.getSearchedValues(routeKey)
        return {
          label,
          placeholder,
          value,
          isMultiple,
          items: props.filterItems
        }
      },
      set: (value) => store.commit(SET_DATA_STATE, { submodule: 'searchedValues', routeKey, value })
    })

    const sortedValue = computed({
      get: () => {
        const { label, placeholder, value } = store.getters.getSortedValue(routeKey)
        return {
          label,
          placeholder,
          value,
          items: props.sortItems
        }
      },
      set: (value) => store.commit(SET_DATA_STATE, { submodule: 'sortedValue', routeKey, value })
    })

    const isDisabledSortEmitter = computed(() => props.sortItems && props.sortItems.length <= 1)

    return {
      searchedPhrase,
      searchedValues,
      sortedValue,
      isDisabledSortEmitter
    }

  }
}
</script>

<style scoped>
.searched-phrase-wrapper-paddding {
  padding-top: 11px;
}
</style>