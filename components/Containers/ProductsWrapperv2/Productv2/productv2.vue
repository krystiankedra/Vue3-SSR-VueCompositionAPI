<template>
  <v-card>
    <v-card-title class="blue darken-4 white--text">
      Name: {{ product.name }}
    </v-card-title>
    <v-card-text>
      Category: {{ product.category }}
    </v-card-text>
    <v-card-actions>
      <button-wrapper :options="{ handler: () => removeProductFromList(product.id), class: 'grey ligthen-3 white--text' }">
        <template #btn-text>
          Remove
        </template>
      </button-wrapper>
    </v-card-actions>
  </v-card>
</template>

<script>
const buttonWrapper = () => import('~/components/Shared/CustomButton/customButton')

export default {
  components: {
    buttonWrapper
  },
  props: {
    removeProductFromList: {
      type: Function,
      default: () => null
    },
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>