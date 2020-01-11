import errorComponent from '~/components/Presentionals/ErrorComponent/errorComponent'

export const asyncComponent = (component) => ({
  component: new Promise((resolve) => {
    setTimeout(() => resolve(component()), 1000)
  }),
  error: errorComponent,
  timeout: 2000
})
