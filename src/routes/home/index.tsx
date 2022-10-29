import { CampaignCard, DashboardStatistics, route, TxList } from '@'
import { Paper, Grid, Container } from '@mantine/core'

export const HomePage = route('/home', () => {
  return (
    <div>
      Home Page
      <Paper
        radius="md"
        p="xl"
        withBorder
        sx={{
          background: 'white',
          '@media (max-width: 755px)': {
            width: '90%',
          },
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <TxList data={[]} />
      </Paper>
      <Grid>
        <Grid.Col xs={4}>
          <CampaignCard
            title="Campaign Title"
            description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components."
          />
        </Grid.Col>
        <Grid.Col xs={4}>
          <CampaignCard
            title="Campaign Title"
            description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components."
          />
        </Grid.Col>
        <Grid.Col xs={4}>
          <CampaignCard
            title="Campaign Title"
            description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components."
          />
        </Grid.Col>
      </Grid>
      <DashboardStatistics data={[]} />
    </div>
  )
})
