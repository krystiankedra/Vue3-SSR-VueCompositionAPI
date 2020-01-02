<template>
  <v-btn @click="options.handler" :class="options.class">
    <slot name="btn-text" />
  </v-btn>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>