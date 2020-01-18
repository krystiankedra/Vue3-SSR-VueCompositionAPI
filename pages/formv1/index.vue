<template>
  <v-container p-5 fluid>
     <form-wrapper>
        <template #title>
          {{ formTitle }}
        </template>
        <template #content>
          <new-employees-form-wrapper
            :form-data="formData"
            :set-updated-component-form-value="setUpdatedComponentFormValue"
          />
        </template>
     </form-wrapper>
  </v-container>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useStore } from '~/helpers/useStore'
import { formWrapper, newEmployeesFormWrapper } from '~/management/LazyLoadingComponentsManagement/lazyLoadingComponentsManagement'
import { SET_FORMS_DATA_STATE } from '~/store/rootMutationTypes'

export default {
  components: {
    formWrapper,
    newEmployeesFormWrapper
  },
  setup(props, { root }) {
    const store = useStore()
    const routeKey = root.$route.name

    const formData = computed(() => store.getters.getFormStructureData(routeKey).value)
    const formTitle = computed(() => store.getters.getFormTitle(routeKey).value)

    const setUpdatedComponentFormValue = (value, idx) => store.commit(SET_FORMS_DATA_STATE, {
      formType: routeKey,
      value,
      idx
    })

    return {
      formData,
      formTitle,
      setUpdatedComponentFormValue
    }

  }
}
</script>
