<template>
  <v-select
    v-model="updatedValue"
    :items="item.items"
    :label="item.label"
    :placeholder="item.placeholder"
    :multiple="item.isMultiple"
    :disabled="isDisabled"
    chips
  />
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props, { emit }) {
    const updatedValue = computed({
      get: () => props.item.value,
      set: (value) => emit('update:item', value)
    })

    return {
      updatedValue
    }

  }
}
</script>