import axios from 'axios'
const createClient = () =>
  axios.create({
    baseURL: 'http://localhost:4000/api',
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

export const getAllAgencies = () =>
  createClient()
    .get('/agency')
    .then(res => res.data)

export const createAgency = body =>
  createClient()
    .post('/agency', body)
    .then(res => res.data)

export const approveAgency = id =>
  createClient()
    .put('/agency/approve/' + id)
    .then(res => res.data)

export const createCampaign = body =>
  createClient()
    .post('/campaign', body)
    .then(res => res.data)

export const getMyCampaigns = () =>
  createClient()
    .get('/campaign')
    .then(res => res.data)

export const getCampaigns = () =>
  createClient()
    .get('/campaigns/all')
    .then(res => res.data)

export const getAgencies = () =>
  createClient()
    .get('/agency')
    .then(res => res.data)

export const getAgencyById = id =>
  createClient()
    .get(`/agency/${id}`)
    .then(res => res.data)

export const getAgenciesCampaignsById = id =>
  createClient()
    .get(`/agency/campaign/${id}`)
    .then(res => res.data)

export const getAllCampaigns = () =>
  createClient()
    .get('/campaigns')
    .then(res => res.data)

export const createTx = body =>
  createClient()
    .post('/tx', body)
    .then(res => res.data)

export const getMyTx = () =>
  createClient()
    .get('/agency/tx/all')
    .then(res => res.data)

export const getRaised = () =>
  createClient()
    .get('/campaign/tx/raised')
    .then(res => res.data)

export const getCRaised = id =>
  createClient()
    .get('/campaign/tx/raised/' + id)
    .then(res => res.data)
