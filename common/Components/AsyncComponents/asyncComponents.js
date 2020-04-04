import { asyncComponentsSchema } from '~/common/Components/AsyncComponents/asyncComponentsSchema'
import { postsWrapper } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'

// Containers
export const asyncPostsWrapper = () => asyncComponentsSchema(postsWrapper)
