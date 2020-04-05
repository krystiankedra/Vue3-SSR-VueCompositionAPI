export default function({ store: { getters }, redirect }) {
  const isAuth = getters.isAuth

  if (!isAuth) {
    return redirect('/')
  }
}
