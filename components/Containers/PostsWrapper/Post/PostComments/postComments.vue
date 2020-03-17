<template>
  <expansion-panel-wrapper>
    <template #expansion-panel-header>
      {{ $t('posts.post.comments') }}
    </template>
    <template #expansion-panel-content>
      <template v-for="(comment, idx) in comments">
        <v-divider v-if="isVisibleDivider(idx)" :key="`post-comment-divider-${idx}`" />
        <post-comment :key="idx" :comment="comment" />
      </template>
    </template>
  </expansion-panel-wrapper>
</template>

<script>
import { expansionPanelWrapper, postComment } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    expansionPanelWrapper,
    postComment
  },
  props: {
    comments: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const isVisibleDivider = (idx) => idx !== 0

    return {
      isVisibleDivider
    }
  }
}
</script>