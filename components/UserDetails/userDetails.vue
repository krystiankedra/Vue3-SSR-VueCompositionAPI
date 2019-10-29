<template>
  <v-card>
    <card-title :header="fullName" />
    <v-card-text>
      <p>id: {{ user.id }}</p>
      <v-text-field
        :value="user.age"
        :label="`Age: ${user.name} ${user.lastname}`"
        :disabled="isDisabledInputToEditAge"
        @input="(value) => changeUserAge(value, user.id)"
      />
      <v-spacer />
      <template v-for="(options, idx) in handlers">
        <button-handler
          :key="idx"
          v-if="options.isVisible"
          :handler="options.handler"
          :label="options.label"
          :color="options.color"
        />
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
import { computed } from '@vue/composition-api'
const buttonHandler = () => import('~/components/shared/ButtonHandler/buttonHandler')
const cardTitle = () => import('~/components/shared/CardTitle/cardTitle')
export default {
  components: {
    buttonHandler,
    cardTitle
  },
  props: {
    changeUserAge: {
      type: Function,
      default: () => null
    },
    deleteUser: {
      type: Function,
      default: () => null
    },
    user: {
      type: Object,
      default: () => {}
    },
    navigateToDetails: {
      type: Function,
      default: () => null
    },
    isVisibleActionButton: {
      type: Boolean,
      default: () => true
    },
    navigateBack: {
      type: Function,
      default: () => null
    },
  },
  setup(initialProps, setupContext) {

    const isDisabledInputToEditAge = computed(() => !initialProps.isVisibleActionButton)

    const handlers = computed(() => {
      const id = initialProps.user.id
      return [
        {
          handler: () => initialProps.navigateToDetails(id),
          label: 'Preview',
          isVisible: initialProps.isVisibleActionButton,
          color: 'blue darken-4 white--text'
        },
        {
          handler: () => initialProps.deleteUser(id),
          label: 'Delete',
          isVisible: initialProps.isVisibleActionButton,
          color: 'red darken-4 white--text'
        },
        {
          handler: () => initialProps.navigateBack(),
          label: 'Back to list',
          isVisible: !initialProps.isVisibleActionButton,
          color: 'blue darken-4 white--text'
        }
      ]
    })

    const fullName = computed(() => `${initialProps.user.name} ${initialProps.user.lastname}`)

    return {
      handlers,
      fullName,
      isDisabledInputToEditAge
    }
  }
}
</script>