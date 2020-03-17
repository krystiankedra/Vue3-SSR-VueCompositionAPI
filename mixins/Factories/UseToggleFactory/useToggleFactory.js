import { ref } from '@vue/composition-api'

const useToggle = () => {
  const show = ref(false)

  const toggle = () => show.value = !show.value

  return {
    show,
    toggle
  }
}

export default useToggle
