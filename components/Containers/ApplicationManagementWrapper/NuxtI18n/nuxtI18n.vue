<template>
  <v-container>
    <nuxt-link v-show="false" id="localePathSwitcher" :to="switchLocalePath(updateLocale.key)" />
    <combobox-emitter :items="locales" :item.sync="updateLocale">
      <template #field-label>
        {{ $t('otherWords.selectLanguage') }}
      </template>
    </combobox-emitter>
  </v-container>
</template>

<script>
import { comboboxEmitter } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
import { computed, ref, onBeforeMount } from '@vue/composition-api'

export default {
  components: {
    comboboxEmitter
  },
  setup(_, { root: { $route, $nextTick } }) {
    const currentLocale = ref(null)

    const locales = computed(() => ([
      { value: 'English', key: 'en' },
      { value: 'Polish', key: 'pl' }
    ]))

    const updateLocale = computed({
      get: () => currentLocale.value,
      set(newLocale) {
        currentLocale.value = newLocale
        $nextTick(() => switchLocale())
      }
    })

    const switchLocale = () => document.getElementById('localePathSwitcher').click()

    const setCurrenLocaleOnStart = () => {
      const currentObjectOnStart = locales.value.find(locale => $route.name.includes(locale.key))
      currentLocale.value = currentObjectOnStart
    }

    onBeforeMount(() => setCurrenLocaleOnStart())

    return {
      locales,
      updateLocale,
      currentLocale
    }
  }
}
</script>
