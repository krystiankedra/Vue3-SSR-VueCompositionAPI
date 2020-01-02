<template>
  <v-card>
    <v-card-title class="grey lighten2 white--text title">
      <slot name="page-header" />
    </v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex v-for="(item, idx) in items" :key="idx" xs12 md4 px-2 py-2>
          <v-card>
            <v-card-title class="blue darken-4 white--text">
              <slot name="title-content" :item="item" />
            </v-card-title>
            <v-card-text>
              <slot name="dynamic-content" :item="item" />
            </v-card-text>
            <v-card-actions>
              <slot name="delete-btn" :item="item" />
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>
