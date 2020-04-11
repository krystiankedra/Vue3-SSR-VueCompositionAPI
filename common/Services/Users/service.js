import { reactive } from '@vue/composition-api'

export default class UsersService {
  constructor(params) {
    const { $api } = params

    this.$api = $api
    this.state = reactive({ users: [] })
  }

  get users() {
    return this.state.users
  }

  async fetch() {
    const response = await this.$api.get('users')
    this.state.users.push(...response.data)
  }
}
