import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react'
import { useNavigate } from 'react-router-dom'
import * as api from './services'

interface IContext {
  me: any
  authentified: null | boolean
  login: any
  logout: any
  getAllAgencies: any
  createAgency: any
  approveAgency: any
  myCampaigns: any
}

const Context = createContext<IContext>({
  me: null,
  authentified: null,
  login: {},
  logout: {},
  getAllAgencies: {},
  createAgency: {},
  approveAgency: {},
  myCampaigns: {},
})

function useLoginCore(cb, ecb) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  const login = useCallback(
    (email, password) => {
      setLoading(true)
      return api
        .login(email, password)
        .then(v => {
          localStorage.setItem('token', v.token)
          setLoading(false)
          if (cb) cb()
        })
        .catch(e => {
          setLoading(false)
          setError(
            e.response?.data?.message ? e.response.data.message : e.message
          )
          if (ecb) ecb()
        })
    },
    [setLoading, setError, cb, ecb]
  )

  return {
    login,
    loading,
    error,
  }
}

export function useLogin() {
  const { login } = useContext(Context)
  return login
}

export function useLogout() {
  const { logout } = useContext(Context)
  return logout
}

export function useGetMe() {
  const { me, authentified } = useContext(Context)
  return { me, authentified }
}

export function useGetAgenciesCore() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  const [agencies, setAgencies] = useState<any>(null)

  const getAgencies = useCallback(() => {
    setLoading(true)
    return api
      .getAllAgencies()
      .then(v => {
        setAgencies(v)
        setLoading(false)
      })
      .catch(e => {
        setLoading(false)
        setError(
          e.response?.data?.message ? e.response.data.message : e.message
        )
      })
  }, [setLoading, setError, setAgencies])

  return {
    getAgencies,
    loading,
    error,
    agencies,
  }
}

export function useMyCampaignsCore() {
  const [createLoading, setCreateLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  const [createError, setCreateError] = useState<any>(null)
  const [campaigns, setCampaigns] = useState<any>([])

  const getCampaigns = useCallback(() => {
    setLoading(true)
    return api
      .getMyCampaigns()
      .then(v => {
        setCampaigns(v)
        setLoading(false)
      })
      .catch(e => {
        setLoading(false)
        setError(
          e.response?.data?.message ? e.response.data.message : e.message
        )
      })
  }, [setLoading, setError, setCampaigns])

  const createCampaign = useCallback(
    body => {
      setLoading(true)
      return api
        .createCampaign(body)
        .then(v => {
          location.reload()

          setCampaigns([...campaigns, v])
          setCreateLoading(false)
        })
        .catch(e => {
          setCreateLoading(false)
          setCreateError(
            e.response?.data?.message ? e.response.data.message : e.message
          )
        })
    },
    [setCreateError, setCreateLoading, setCampaigns]
  )

  return {
    getCampaigns,
    loading,
    error,
    campaigns,

    createCampaign: {
      create: createCampaign,
      loading: createLoading,
      error: createError,
    },
  }
}

export function useMyCampaigns() {
  const { myCampaigns } = useContext(Context)
  return myCampaigns
}

export function useCreateAgencyCore() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<any>(null)

  const create = useCallback(
    body => {
      setLoading(true)
      return api
        .createAgency(body)
        .then(v => {
          setDone(v.done)
          setLoading(false)
        })
        .catch(e => {
          setLoading(false)
          setError(
            e.response?.data?.message ? e.response.data.message : e.message
          )
        })
    },
    [setLoading, setError]
  )

  return {
    done,
    create,
    loading,
    error,
  }
}

export function useApproveAgencyCore() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  const approve = useCallback(
    id => {
      setLoading(true)
      return api
        .approveAgency(id)
        .then(v => {
          setLoading(false)
        })
        .catch(e => {
          setLoading(false)
          setError(
            e.response?.data?.message ? e.response.data.message : e.message
          )
        })
    },
    [setLoading, setError]
  )

  return {
    approve,
    loading,
    error,
  }
}

export function useApproveAgency() {
  const { approveAgency } = useContext(Context)
  return approveAgency
}

export function useCreateAgency() {
  const { createAgency } = useContext(Context)
  return createAgency
}

export function useGetAllAgencies() {
  const { getAllAgencies } = useContext(Context)
  return getAllAgencies
}

export function ContextProvider({ children }) {
  const [me, setMe] = useState(null)
  const goto = useNavigate()
  const [authentified, setAuthetified] = useState<null | boolean>(null)
  const getAllAgencies = useGetAgenciesCore()
  const createAgency = useCreateAgencyCore()
  const approveAgency = useApproveAgencyCore()
  const myCampaigns = useMyCampaignsCore()

  const login = useLoginCore(
    () => {
      api
        .getMe()
        .then(v => {
          setMe(v)
          setAuthetified(true)
          if (v.role === 'admin') goto('/admin')
          else goto('/dash')
        })
        .catch(() => {
          setAuthetified(false)
          setMe(null)
        })
    },
    () => {
      setAuthetified(false)
      setMe(null)
    }
  )

  useEffect(() => {
    api
      .getMe()
      .then(v => {
        setMe(v)
        setAuthetified(true)
      })
      .catch(() => {
        setAuthetified(false)
        setMe(null)
      })
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    setAuthetified(false)
    setMe(null)
    goto('/login')
  }, [setAuthetified, setMe])

  const value = useMemo(
    () => ({
      me,
      authentified,
      login,
      logout,
      getAllAgencies,
      createAgency,
      approveAgency,
      myCampaigns,
    }),
    [
      me,
      authentified,
      login,
      logout,
      getAllAgencies,
      createAgency,
      approveAgency,
      myCampaigns,
    ]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
