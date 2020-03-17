<template>
  <v-combobox
    v-model="selectedValue"
    :items="items"
    item-text="value"
    return-object
    small-chips
    :readonly="isDisabled"
    :multiple="isMultiple"
  >
    <template #label>
      <span class="primary-input-label--text">
        <slot name="field-label" />
      </span>
    </template>
    <template #selection="{ item, attrs, selected, disabled, parent }">
      <v-chip
        :key="JSON.stringify(item.key)"
        v-bind="attrs"
        :input-value="selected"
        :disabled="disabled"
        @click:close="parent.selectItem(item)"
      >
        <span class="primary-combox-chip--text">
          {{ item.value }}
        </span>
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    items: {
      type: Array,
      default: () => []
    },
    isMultiple: {
      type: Boolean,
      default: () => false
    },
    isDisabled: {
      type: Boolean,
      default: () => false
    }
  },
  setup({ item }, { emit }) {
    const selectedValue = computed({
      get: () => item,
      set: (newValue) => emit('update:item', newValue)
    })

    return {
      selectedValue
    }
  }
}
</script>
