import { route } from '@'
import { CampaignsList } from './campaigns-list'

export const CampaignsPage = route('/campaigns', () => {
  return (
    <div>
      <CampaignsList />
    </div>
  )
})
