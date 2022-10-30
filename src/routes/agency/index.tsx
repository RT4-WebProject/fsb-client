import { route } from '@'
import { Header } from './header'
import { CampaignsList } from './campaigns-list'

export const AgencyPage = route('/agencies/:id', () => {
  return (
    <div>
      <Header />
      <CampaignsList />
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
