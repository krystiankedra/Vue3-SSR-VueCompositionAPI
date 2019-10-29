<template>
  <v-btn :color="color" @click="handler">{{ label }}</v-btn>
</template>

<script>
export default {
  props: {
    handler: {
      type: Function,
      default: () => null
    },
    label: {
      type: String,
      default: () => ''
    },
    color: {
      type: String,
      default: () => ''
    }
  }
}
</script>