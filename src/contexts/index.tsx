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
}

const Context = createContext<IContext>({
  me: null,
  authentified: null,
  login: {},
  logout: {},
  getAllAgencies: {},
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

export function useGetAllAgencies() {
  const { getAllAgencies } = useContext(Context)
  return getAllAgencies
}

export function ContextProvider({ children }) {
  const [me, setMe] = useState(null)
  const goto = useNavigate()
  const [authentified, setAuthetified] = useState<null | boolean>(null)
  const getAllAgencies = useGetAgenciesCore()

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
    () => ({ me, authentified, login, logout, getAllAgencies }),
    [me, authentified, login, logout, getAllAgencies]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
