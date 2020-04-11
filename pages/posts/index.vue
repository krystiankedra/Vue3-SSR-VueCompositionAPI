<template>
  <async-posts-wrapper :posts="posts" />
</template>

<script>
import { useStore } from '~/common/StoreInjector/storeInjector'
import { onMounted, onUnmounted, computed } from '@vue/composition-api'
import { asyncPostsWrapper } from '~/common/Components/AsyncComponents/asyncComponents'
import { useMapGetters, useMapMutations, useMapActions } from '~/common/Management/Posts/posts'
import layoutProviderFactory from '~/mixins/Factories/LayoutProviderFactory/layoutProviderFactory'

export default {
  components: {
    asyncPostsWrapper
  },
  middleware: ['Client/Auth/auth'],
  mixins: [
    layoutProviderFactory()
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
