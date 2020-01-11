<template>
  <img width="25%" :src="error" />
</template>

<script>
import error from '~/assets/error.png'
export default {
  setup() {
    return {
      error
    }
  }
}
</script>