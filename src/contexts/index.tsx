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
}

const Context = createContext<IContext>({
  me: null,
  authentified: null,
  login: {},
})

function useLoginCore(cb, ecb) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  const goto = useNavigate()

  const login = useCallback(
    (email, password) => {
      setLoading(true)
      return api
        .login(email, password)
        .then(v => {
          localStorage.setItem('token', v.token)
          setLoading(false)
          if (cb) cb()
          if (v.role === 'admin') goto('/admin')
          else goto('/dashboard')
        })
        .catch(e => {
          console.log(e.data)
          setLoading(false)
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

export function useGetMe() {
  const { me, authentified } = useContext(Context)
  return { me, authentified }
}

export function ContextProvider({ children }) {
  const [me, setMe] = useState(null)
  const [authentified, setAuthetified] = useState<null | boolean>(null)

  const login = useLoginCore(
    () => {
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

  const value = useMemo(
    () => ({ me, authentified, login }),
    [me, authentified, login]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
