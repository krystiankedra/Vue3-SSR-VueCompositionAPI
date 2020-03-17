<template>
  <v-container>
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <a @click="navigateToHomepage">
      Home page
    </a>
  </v-container>
</template>

<script>
export default {
  layout: 'guest',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  setup(_, { root: { $router } }) {
    const navigateToHomepage = () => $router.push('/')

    return {
      navigateToHomepage
    }
  }
}
</script>
