<template>
  <v-card height="200px" flat>
    <v-bottom-nav
      :active.sync="selectedRoute"
      :value="true"
      color="transparent"
      fixed
    >
      <template v-for="({ color, value, displayText, icon }, idx) in navigationConfig">
        <v-btn
          :key="idx"
          :color="color"
          :value="value"
          @click="() => navigateTo(value)"
        >
          <span>{{ displayText }}</span>
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </template>
    </v-bottom-nav>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'
import { botttomNavigationConfig } from '~/management/BottomNavigationManagement/bottomNavigationManagement'

export default {
  setup(props, { root: { $router, $route }}) {
    const selectedRoute = ref($route.name)
    const navigationConfig = botttomNavigationConfig()

    const navigateTo = routePath => {
      const isOnCurrentPage = selectedRoute.value === routePath
      if (!isOnCurrentPage) {
        $router.push(`/${routePath}`)
      }
    }

    return {
      selectedRoute,
      navigationConfig,
      navigateTo
    }

  }
}
</script>