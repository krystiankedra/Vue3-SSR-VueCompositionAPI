<template>
  <div>
    <v-navigation-drawer v-model="drawer" app :clipped="$vuetify.breakpoint.lgAndUp">
      <v-list>
        <v-list-item v-for="(route, idx) in routes" :key="idx" link @click="$router.push(route.to)">
          <template v-if="route.hasPermissions">
            <v-list-item-action>
              <v-icon>
                {{ route.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ $t(route.name) }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary-card-header" dark>
      <v-app-bar-nav-icon class="primary-icon-on-background--text" @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="primary-text-on-background--text">
        {{ $t('otherWords.applicationTitle') }}
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import { useStore } from '~/common/StoreInjector/storeInjector'
import { ref, computed } from '@vue/composition-api'
import { useMapGetters } from '~/common/Management/Auth/Auth'
import useToggle from '~/mixins/Factories/UseToggleFactory/useToggleFactory'

export default {
  setup() {
    const store = useStore()
    const mapGetters = () => useMapGetters({ getters: store.getters })

    const { show: drawer, toggle: toggleDrawer } = useToggle()

    const hasPermissions = computed(() => mapGetters().isAuth())

    const routes = computed(() => ([
      { name: 'navigationWords.homepage', to: '/', icon: 'mdi-home', hasPermissions: true },
      { name: 'navigationWords.posts', to: '/posts', icon: 'mdi-widgets', hasPermissions: hasPermissions.value },
      { name: 'navigationWords.todos', to: '/todos', icon: 'mdi-dropbox', hasPermissions: hasPermissions.value },
      { name: 'navigationWords.users', to: '/users', icon: 'mdi-dropbox', hasPermissions: hasPermissions.value }
    ]))

    return {
      drawer,
      routes,
      toggleDrawer
    }
  }
}
</script>

<style scoped>
.v-navigation-drawer {
  top: 0 !important;
  max-height: 100% !important;
}
</style>
