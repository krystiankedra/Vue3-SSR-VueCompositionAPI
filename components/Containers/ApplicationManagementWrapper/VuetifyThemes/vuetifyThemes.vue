<template>
  <v-container>
    <combobox-emitter :item.sync="selectedTheme" :items="themeVariants">
      <template #field-label>
        {{ $t('otherWords.selectTheme') }}
      </template>
    </combobox-emitter>
  </v-container>
</template>

<script>
import { comboboxEmitter } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
import { computed, ref } from '@vue/composition-api'
export default {
  components: {
    comboboxEmitter
  },
  setup(_, { root: { $vuetify, $nextTick } }) {
    const currentTheme = ref({ value: 'Standard', key: 'light' })

    const themeVariants = computed(() => ([
      { value: 'Standard', key: 'light' },
      { value: 'Black-white', key: 'black' },
      { value: 'Yellow-Black', key: 'yellow' }
    ]))

    const isSelectedLightTheme = computed(() => currentTheme.value.key === 'light')

    const selectedTheme = computed({
      get: () => currentTheme.value,
      set: (value) => {
        currentTheme.value = value
        $nextTick(() => $vuetify.theme.dark = !isSelectedLightTheme.value)
        if (!isSelectedLightTheme.value) changeDarkTheme(value.key)
      }
    })

    const changeDarkTheme = (theme) => {
      const selectedDarkThemeObject = $vuetify.theme.themes.dark[theme]
      Object.entries(selectedDarkThemeObject).forEach((item) => $vuetify.theme.themes.dark[item[0]] = item[1])
    }

    return {
      selectedTheme,
      themeVariants
    }
  }
}
</script>
