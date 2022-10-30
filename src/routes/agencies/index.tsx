import { route } from '@'
import { ImageActionBanner } from './Card'
import { useGetApprovedAgencies } from 'ctx'
import { useEffect } from 'react'
import { Container, Grid, Title } from '@mantine/core'

export const AgenciesPage = route('/agencies', () => {
  const { loading, agencies, getAgencies } = useGetApprovedAgencies()
  useEffect(() => {
    getAgencies()
  }, [])
  if (loading) return null

  return (
    <div>
      <Container mt={80} size={900}>
        <Title
          align="center"
          sx={theme => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
            marginBottom: 40,
          })}
        >
          Agencies
        </Title>
        <Grid>
          {agencies &&
            agencies.map(a => (
              <Grid.Col key={a.id} xs={12} sm={6}>
                <ImageActionBanner {...a} />
              </Grid.Col>
            ))}
        </Grid>
      </Container>
    </div>
  )
})
