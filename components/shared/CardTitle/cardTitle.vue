<template>
  <v-card-title class="blue darken-4 white--text headline pt-2 pb-0">
    <p>{{ header }}</p>
  </v-card-title>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: () => ''
    }
  }
}
</script>