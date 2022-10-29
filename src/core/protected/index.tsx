import { useGetMe } from 'ctx'
import { Navigate } from 'react-router-dom'

export function Protected({ role, fallback, children }) {
  const { authentified, me } = useGetMe()

  if (authentified === null) return

  if (authentified === false) {
    return <Navigate to={fallback} />
  }

  if (role && me.role !== role) {
    return <Navigate to={fallback} />
  }

  return children
}
