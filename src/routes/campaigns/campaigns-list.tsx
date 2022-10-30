import { Container, Grid, Paper } from '@mantine/core'
import { Card } from '@'
import { useGetAllCampaigns } from 'ctx'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function CampaignsList() {
  const { loading, campaigns, getCampaigns } = useGetAllCampaigns()
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
                id={c.id}
                agency={c.launchedBy}
                title={c.title}
                description={c.description}
                goal={c.goal}
                withLink
              />
            </Grid.Col>
          ))}
      </Grid>
    </Container>
  )
}
