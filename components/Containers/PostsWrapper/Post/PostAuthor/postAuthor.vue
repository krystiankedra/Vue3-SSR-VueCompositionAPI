<template>
  <expansion-panel-wrapper>
    <template #expansion-panel-header>
      {{ $t('posts.post.informationAboutAuthor') }}
    </template>
    <template #expansion-panel-content>
      <v-layout row wrap>
        <v-flex xs12 v-for="({ label, text }, idx) in dynamicRender" :key="idx" pt-2>
          <text-wrapper :label="$t(label)" :text="text" />
        </v-flex>
      </v-layout>
    </template>
  </expansion-panel-wrapper>
</template>

<script>
import { expansionPanelWrapper, textWrapper } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
import { computed } from '@vue/composition-api'
export default {
  components: {
    expansionPanelWrapper,
    textWrapper
  },
  props: {
    author: {
      type: Object,
      default: () => {}
    }
  },
  setup({ author }) {
    const { name, username, email, phone, website, address: { street, city, zipcode }, company } = author
    const dynamicRender = computed(() => ([
      { label: 'posts.post.author.name', text: name },
      { label: 'posts.post.author.username', text: username },
      { label: 'posts.post.author.email', text: email },
      { label: 'posts.post.author.phone', text: phone },
      { label: 'posts.post.author.website', text: website },
      { label: 'posts.post.author.address.street', text: street },
      { label: 'posts.post.author.address.city', text: city },
      { label: 'posts.post.author.address.zipcode', text: zipcode },
      { label: 'posts.post.author.company.name', text: company.name }
    ]))

    return {
      dynamicRender
    }
  }
}
</script>
