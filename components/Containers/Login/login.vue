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
          <v-btn @click="logType" :name="$t(logTypeBtn)" class="primary-button-background primary-button-text-on-background--text">
            {{ $t(logTypeBtn) }}
          </v-btn>
        </v-row>
      </template>
    </card-wrapper>
  </v-container>
</template>

<script>
import { useStore } from '~/common/CompositionApi/compositionApi'
import { cardWrapper } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
import { computed } from '@vue/composition-api'
import { useMapGetters, useMapMutations } from '~/common/Management/Auth/Auth'
import { generateToken } from '~/common/Token/token'

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

    const navigateToAfterLogType = () => $router.push('/posts')

    const changeUserAuthState = () => mapMutations().setUserAuth(!isAuth.value)

    const setUserTokenState = (token) => mapMutations().setUserToken(token)

    const setUserTokenCookie = (token) => document.cookie = `token=${token}`

    const setUserToken = (token) => {
      setUserTokenState(token)
      setUserTokenCookie(token)
    }

    const logType = () => isAuth.value ? logout() : login()

    const login = () => {
      setUserToken(generateToken())
      changeUserAuthState()
      navigateToAfterLogType()
    }

    const logout = () => {
      setUserToken('')
      changeUserAuthState(null)
    }

    return {
      logType,
      logTypeBtn
    }
  }
}
</script>
