import { route } from '@'

export const AgencyPage = route('/agencies/:id', () => {
  return (
    <div>
      Agency Page
      <br />
      agency data
      <br />
      agency campaigns
      <br />
      active campaigns
      <br />
      feedbacks
      <br />
      donate to agency
      <br />
      donate to campaign
      <br />
    </div>
  )
})
