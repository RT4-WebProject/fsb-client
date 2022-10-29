import { route } from '@'

export const AdminDashboardPage = route('/admin', () => {
  return (
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
  )
})
