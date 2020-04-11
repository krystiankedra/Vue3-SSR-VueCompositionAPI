import { provide, inject } from '@vue/composition-api'
import UsersService from '~/common/Services/Users/service'

const UsersServiceSymbol = Symbol()

let instance

export const provideUsersService = params => {
  if (!instance) {
    instance = new UsersService(params)
  }
  provide(UsersServiceSymbol, instance)
}

export const useUsersService = () => {
  const usersService = inject(UsersServiceSymbol)
  if (usersService) {
    return usersService
  }
}
