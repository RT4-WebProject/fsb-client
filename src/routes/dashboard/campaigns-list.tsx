import { Container, Grid, Paper } from '@mantine/core'
import { Card } from '@'
import { useMyCampaigns } from 'ctx'
import { useEffect } from 'react'

export function CampaignsList() {
  const { loading, campaigns, getCampaigns } = useMyCampaigns()
  useEffect(() => {
    getCampaigns()
  }, [])

  if (loading) return null
  return (
    <Container my={80} size={800}>
      <Grid>
        {campaigns &&
          campaigns.map(c => (
            <Grid.Col xs={12} sm={6} key={c.id}>
              <Card
                title={c.title}
                description={c.description}
                goal={c.goal}
                withLink={false}
              />
            </Grid.Col>
          ))}
      </Grid>
    </Container>
  )
}
