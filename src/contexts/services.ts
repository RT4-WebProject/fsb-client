import axios from 'axios'
const createClient = () =>
  axios.create({
    baseURL: 'http://localhots:4000',
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  })

export const getMe = () =>
  createClient()
    .get('/me')
    .then(res => res.data)

export const login = (email, password) =>
  createClient()
    .post('/login', { email, password })
    .then(res => res.data)
