<template>
  <v-snackbar :value="instanceAxiosCapturedError" :top="true">
    {{ errorStatus ? $t('errorWords.errorOnApiCall') - errorStatus - errorUrl : $t('errorWords.errorNoDetected') }}
    <v-btn
      color="primary-snackbar-text"
      text
      @click="clearError"
    >
      {{ $t('otherWords.close') }}
    </v-btn>
  </v-snackbar>
</template>

<script>
import { useStore } from '~/commons/CompositionApi/compositionApi'
import { useMapGetters, useMapMutations } from '~/commons/Management/Error/Error'
import { computed } from '@vue/composition-api'

export default {
  setup() {
    const store = useStore()
    const mapGetters = () => useMapGetters({ getters: store.getters })
    const mapMutations = () => useMapMutations({ commit: store.commit })

    const error = computed(() => mapGetters().error())

    const instanceAxiosCapturedError = computed(() => error.value ?? false)

    const errorStatus = computed(() => error.value?.status)

    const errorUrl = computed(() => error.value?.config?.url)

    const clearError = () => mapMutations().setError(null)

    return {
      instanceAxiosCapturedError,
      errorStatus,
      errorUrl,
      clearError
    }
  }
}
</script>