import { route, Protected } from '@'

export const DashboardPage = route('/dash', () => {
  return (
    <Protected role="agency" fallback="/">
      <div>
        Ageny Dashboard Page
        <br />
        get list of tx
        <br />
        total money collected
        <br />
        create campaign form
        <br />
        get list of campaigns
        <br />
        set campaign status
        <br />
        feedbacks
      </div>
    </Protected>
  )
})
