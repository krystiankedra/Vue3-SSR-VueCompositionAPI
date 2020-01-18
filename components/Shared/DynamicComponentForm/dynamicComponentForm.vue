<template>
  <component
    :is="dynamicComponentType"
    :item.sync="updateComponentData"
    :items="componentData.items"
  />
</template>

<script>
import { inputEmitter, dropDownEmitter } from '~/management/LazyLoadingComponentsManagement/lazyLoadingComponentsManagement'
import { changeFieldType } from '~/management/FormTransformDataManagement/formTransformDataManagement'
import { computed } from '@vue/composition-api'

export default {
  components: {
    inputEmitter,
    dropDownEmitter
  },
  props: {
    componentData: {
      type: Object,
      default: () => {}
    },
    idx: {
      type: Number,
      default: () => null
    },
    setUpdatedComponentFormValue: {
      type: Function,
      default: () => null
    }
  },
  setup(props) {
    const idx = props.idx
    const dynamicComponentType = changeFieldType(props.componentData.fieldType)

    const updateComponentData = computed({
      get: () => props.componentData,
      set: (value) => props.setUpdatedComponentFormValue(value, idx)
    })

    return {
      dynamicComponentType,
      updateComponentData
    }

  }
}
</script>