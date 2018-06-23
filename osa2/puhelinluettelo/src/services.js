import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

const getAll = () => {
  return axios.get(`${baseUrl}/persons`)
}

const create = (newObject) => {
  return axios.post(`${baseUrl}/persons`, newObject)
}

const remove = (user) => {
  return axios.delete(`${baseUrl}/${user.id}`)
}

const updatePerson = (newObject) => {
  return axios.put(`${baseUrl}/${newObject.id}`, newObject)
}

export default { getAll, create, remove, updatePerson}
