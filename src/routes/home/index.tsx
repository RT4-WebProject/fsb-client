import {
  CampaignCard as StatsRingCard,
  DashboardStatistics,
  route,
  TxList,
} from '@'
import { Paper, Grid, Footer, Title, SimpleGrid } from '@mantine/core'
import { FaqWithBg } from '../../core/faq'
import { FeaturesAsymmetrical } from '../../core/features'
import { FooterLinks } from '../../core/footer'
import { HeroImageBackground } from '../../core/hero'
import { HeatMap } from '../../core/map'

import './styles.css'

export const HomePage = route('/', () => {
  return (
    <div>
      <HeroImageBackground />
      <Paper
        radius="md"
        p="xl"
        withBorder
        sx={{
          background: 'white',
          '@media (max-width: 755px)': {
            width: '100%',
            margin: '0 auto',
          },
          transform: 'translateY(-60px)',
          marginRight: '40px',
          marginLeft: '40px',
          zIndex: 2,
        }}
      >
        <TxList data={[]} />
      </Paper>
      <Title align="center" style={{ marginBottom: '40px' }}>
        Currently Running Campaigns
      </Title>
      <SimpleGrid
        cols={1}
        spacing="md"
        breakpoints={[{ maxWidth: 'xs', cols: 1 }]}
      >
        <Grid
          style={{
            marginLeft: '40px',
            marginRight: '40px',
            marginBottom: '40px',
          }}
        >
          <Grid.Col span={4}>
            <StatsRingCard
              title={'Campaign 1'}
              completed={3400}
              total={10500}
              stats={[]}
              agency="Agency 123"
              link="test.com"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <StatsRingCard
              title={'Campaign 2'}
              completed={450}
              total={1000}
              stats={[]}
              agency="Test"
              link="test.com"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <StatsRingCard
              title={'Campaign 3'}
              completed={1200}
              total={2000}
              stats={[]}
              agency="Red Cross"
              link="test.com"
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>

      <Title align="center" style={{ marginBottom: '40px' }}>
        Realtime Crisis Heatmap
      </Title>

      <HeatMap />
      <DashboardStatistics data={[]} />

      <FeaturesAsymmetrical />

      <FaqWithBg />

      <FooterLinks data={[]} />
    </div>
  )
})
