<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 v-for="({ label, text }, idx) in dynamicRender" :key="idx">
        <text-wrapper :label="$t(label)" :text="text" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { textWrapper } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
import { computed } from '@vue/composition-api'
export default {
  components: {
    textWrapper
  },
  props: {
    comment: {
      type: Object,
      default: () => {}
    }
  },
  setup({ comment }) {
    const { email, name, body } = comment
    const dynamicRender = computed(() => ([
      { text: name, label: 'posts.post.comment.name' },
      { text: email, label: 'posts.post.comment.email' },
      { text: body, label: 'posts.post.comment.body' }
    ]))

    return {
      dynamicRender
    }
  }
}
</script>
