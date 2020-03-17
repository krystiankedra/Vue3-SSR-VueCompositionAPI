<template>
  <v-container>
    <card-wrapper>
      <template #card-title>
        <span class="headline primary-card-header-text--text">
          {{ $t('otherWords.loginCardHeaderText') }}
        </span>
      </template>
      <template #card-content>
        <v-row>
          <span class="title primary-card-text--text">
            {{ $t('otherWords.loginInformationText') }}
          </span>
        </v-row>
        <v-row class="pt-2">
          <v-btn @click="login" class="primary-button-background primary-button-text-on-background--text">
            {{ $t(logTypeBtn) }}
          </v-btn>
        </v-row>
      </template>
    </card-wrapper>
  </v-container>
</template>

<script>
import { useStore } from '~/commons/CompositionApi/compositionApi'
import { cardWrapper } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
import { computed } from '@vue/composition-api'
import { useMapGetters, useMapMutations } from '~/commons/Management/Auth/Auth'

export default {
  components: {
    cardWrapper
  },
  setup(_, { root: { $router } }) {
    const store = useStore()
    const mapGetters = () => useMapGetters({ getters: store.getters })
    const mapMutations = () => useMapMutations({ commit: store.commit })

    const isAuth = computed(() => mapGetters().isAuth())

    const logTypeBtn = computed(() => isAuth.value ? 'otherWords.logout' : 'otherWords.login')

    const navigateToAfterLogType = () => isAuth.value ? $router.push('/posts') : $router.push('/')

    const changeUserAuthState = () => mapMutations().setUserAuth(!isAuth.value)

    const login = () => {
      changeUserAuthState()
      navigateToAfterLogType()
    }

    return {
      login,
      logTypeBtn
    }
  }
}
</script>
