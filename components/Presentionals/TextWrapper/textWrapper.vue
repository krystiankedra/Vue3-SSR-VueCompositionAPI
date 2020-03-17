<template>
  <span class="primary-card-text--text">
    <span class="font-weight-black">
      {{ label }}:
    </span>
    <span>
      {{ text }}
    </span>
  </span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    text: {
      type: String,
      default: () => ''
    }
  }
}
</script>
