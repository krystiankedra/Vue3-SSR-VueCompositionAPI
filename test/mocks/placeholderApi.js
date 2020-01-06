import axios from 'axios'

const getPhotos = () => axios.get('https://jsonplaceholder.typicode.com/photos')
const getComments = () => axios.get('https://jsonplaceholder.typicode.com/comments')
const getAlbums = () => axios.get('https://jsonplaceholder.typicode.com/albums')

export async function *getPlaceholderFlowApi() {
  yield getPhotos()
  yield getComments()
  yield getAlbums()
}