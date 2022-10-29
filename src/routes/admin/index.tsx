import { route, Protected } from '@'

export const AdminDashboardPage = route('/admin', () => {
  return (
    <Protected role="admin" fallback="/">
      <div>
        Admin Dashboard Page
        <br />
        get list of requests
        <br />
        get list of agencies
        <br />
        get list of tx
        <br />
      </div>
    </Protected>
  )
})
