<template>
  <v-text-field
    v-model="updatedValue"
    :label="item.label"
    :placeholder="item.placeholder"
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