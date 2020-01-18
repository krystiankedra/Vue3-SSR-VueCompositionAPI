<template>
  <v-layout row wrap>
    <template v-for="(componentData, idx) in formData">
      <v-flex xs12 lg6 :key="idx" px-2 py-2 :class="setClassForFieldTypeDropdown(componentData.fieldType)">
        <dynamic-component-form
          :component-data="componentData"
          :idx="idx"
          :set-updated-component-form-value="setUpdatedComponentFormValue"
        />
      </v-flex>
    </template>
  </v-layout>
</template>

<script>
import { dynamicComponentForm } from '~/management/LazyLoadingComponentsManagement/lazyLoadingComponentsManagement'
export default {
  components: {
    dynamicComponentForm
  },
  props: {
    formData: {
      type: Array,
      default: () => [],
      required: true
    },
    setUpdatedComponentFormValue: {
      type: Function,
      default: () => null,
      required: true
    }
  },
  setup() {

    const setClassForFieldTypeDropdown = (type) => type === 'dropdown' ? '' : 'not-dropdown-wrapper-padding-top'

    return {
      setClassForFieldTypeDropdown
    }

  }
}
</script>
