import axios from 'axios'
// const baseUrl = `http://localhost:${process.env.PORT || 3001}/api`
const baseUrl = `https://fast-retreat-47161.herokuapp.com/api`

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
