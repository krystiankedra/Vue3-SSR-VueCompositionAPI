export const fetchTodos = async (payload) => {
  const { $api } = payload
  const response = await $api.get('todos')
  return response.data
}
