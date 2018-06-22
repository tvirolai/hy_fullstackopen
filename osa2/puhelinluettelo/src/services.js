import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = (newObject) => {
  return axios.post(baseUrl, newObject)
}

const remove = (user) => {
  return axios.delete(`${baseUrl}/${user.id}`)
}

const updatePerson = (newObject) => {
  return axios.put(`${baseUrl}/${newObject.id}`, newObject)
}

export default { getAll, create, remove, updatePerson}
