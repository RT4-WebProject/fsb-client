import { route, Protected } from '@'
import { useGetAllAgencies } from 'ctx'
import { useEffect } from 'react'

function Main() {
  const { getAgencies, loading, error, agencies } = useGetAllAgencies()
  useEffect(() => {
    getAgencies()
  }, [])

  if (loading) return null

  return (
    <div>
      {JSON.stringify(agencies)}
      Admin Dashboard Page
      <br />
      get list of requests
      <br />
      get list of agencies
      <br />
      get list of tx
      <br />
    </div>
  )
}

export const AdminDashboardPage = route('/admin', () => {
  return (
    <Protected role="admin" fallback="/">
      <Main />
    </Protected>
  )
})
