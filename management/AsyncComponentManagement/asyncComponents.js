import { asyncComponent } from '~/management/AsyncComponentManagement/asyncComponentSchema'
import { pageWrapper, pageWrapperv2 } from '~/management/LazyLoadingComponentsManagement/lazyLoadingComponentsManagement'


export const asyncPageWrapper = () => asyncComponent(pageWrapper)
export const asyncPageWrapperv2 = () => asyncComponent(pageWrapperv2)
