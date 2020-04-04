<template>
  <async-posts-wrapper :posts="posts" />
</template>

<script>
import { useStore } from '~/common/CompositionApi/compositionApi'
import { onMounted, onUnmounted, computed } from '@vue/composition-api'
import providerLayoutFactory from '~/mixins/Factories/ProviderLayoutFactory/providerLayoutFactory'
import guardValidateFactory from '~/mixins/Factories/GuardValidateFactory/guardValidateFactory'
import { asyncPostsWrapper } from '~/common/Components/AsyncComponents/asyncComponents'
import { useMapGetters, useMapMutations, useMapActions } from '~/common/Management/Posts/posts'

export default {
  components: {
    asyncPostsWrapper
  },
  mixins: [
    guardValidateFactory(),
    providerLayoutFactory()
  ],
  setup() {
    const store = useStore()
    const mapGetters = () => useMapGetters({ getters: store.getters })
    const mapMutations = () => useMapMutations({ commit: store.commit })
    const mapActions = () => useMapActions({ dispatch: store.dispatch })

    onMounted(async () => {
      await mapActions().getPosts()
    })

    onUnmounted(() => {
      mapMutations().clearPosts()
    })

    const posts = computed(() => mapGetters().posts())

    return {
      posts
    }
  }
}
</script>
