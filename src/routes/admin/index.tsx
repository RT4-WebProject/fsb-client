import { route, Protected } from '@'
import { useGetAllAgencies } from 'ctx'
import { useEffect } from 'react'
import { AgenciesList } from './agencies-list'

function Main() {
  const { getAgencies, loading, agencies } = useGetAllAgencies()
  useEffect(() => {
    getAgencies()
  }, [])

  if (loading) return null

  return (
    <div>
      <AgenciesList data={agencies} />
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
