import { asyncComponentsSchema } from '~/commons/Components/AsyncComponents/asyncComponentsSchema'
import { postsWrapper } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'

// Containers
export const asyncPostsWrapper = () => asyncComponentsSchema(postsWrapper)
