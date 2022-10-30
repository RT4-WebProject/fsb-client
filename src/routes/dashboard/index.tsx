import { route, Protected } from '@'
import { CampaignsList } from './campaigns-list'
import { Header } from './header'
import { CreateCampaign } from '@'
import { Container, Grid, Tabs } from '@mantine/core'
import { StatsGroup } from '../../core'
import { TxList } from './tx'
import { Feedbacks } from './feedback'

export const DashboardPage = route('/dash', () => {
  return (
    <Protected role="agency" fallback="/">
      <div>
        <Header />
        <Tabs defaultValue="stats" activateTabWithKeyboard={false} sx={{}}>
          <Tabs.List
            position="center"
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 100,
              paddingTop: 20,
              background: 'white',
            }}
          >
            <Tabs.Tab
              value="stats"
              sx={{
                fontWeight: 600,
                paddingBottom: 20,
              }}
            >
              Statistics
            </Tabs.Tab>
            <Tabs.Tab
              value="campaigns"
              sx={{
                fontWeight: 600,
                paddingBottom: 20,
              }}
            >
              Campaigns
            </Tabs.Tab>
            <Tabs.Tab
              value="create-campaign"
              sx={{
                fontWeight: 600,
                paddingBottom: 20,
              }}
            >
              Create Campaigns
            </Tabs.Tab>
            <Tabs.Tab
              value="feedbacks"
              sx={{
                fontWeight: 600,
                paddingBottom: 20,
              }}
            >
              Feedbacks
            </Tabs.Tab>
            <Tabs.Tab
              value="tx"
              sx={{
                fontWeight: 600,
                paddingBottom: 20,
              }}
            >
              Transactions
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="stats">
            <div
              style={{
                padding: '40px',
              }}
            >
              <StatsGroup
                data={{
                  title: 'How Much You Raised',
                  description:
                    'Total amount of money raised by your Activities',
                }}
              />
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="feedbacks">
            <Feedbacks />
          </Tabs.Panel>
          <Tabs.Panel value="tx">
            <TxList />
          </Tabs.Panel>
          <Tabs.Panel value="campaigns">
            <CampaignsList />
          </Tabs.Panel>
          <Tabs.Panel value="create-campaign">
            <Container size={600}>
              <CreateCampaign />
            </Container>
          </Tabs.Panel>
        </Tabs>
      </div>
    </Protected>
  )
})
