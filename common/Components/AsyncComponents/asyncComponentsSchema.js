import errorWrapper from '~/components/Presentionals/ErrorWrapper/errorWrapper'

export const asyncComponentsSchema = (component) => ({
  component: new Promise((resolve) => {
    setTimeout(() => resolve(component()), 250)
  }),
  error: errorWrapper,
  timeout: 1000
})
