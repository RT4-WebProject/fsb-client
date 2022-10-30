import { Avatar, Text, Button, Paper, Badge } from '@mantine/core'
import { useGetAgencyById } from 'ctx'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useModal } from '@'

export function Header() {
  const p = useParams()
  const { setOpened, setCampaign, setAgency, setTitle } = useModal()

  const { loading, agency, getAgency } = useGetAgencyById()

  useEffect(() => {
    getAgency(p.id)
  }, [])

  if (!agency || loading) return null

  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={theme => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar
        src={agency.image}
        size={200}
        radius={10000}
        mx="auto"
        sx={{
          border: '7px solid #FF8C00',
          padding: 1,
        }}
      />
      <Text align="center" size="lg" weight={500} mt="md">
        {agency.name}

        <Button
          size="sm"
          color="green"
          sx={{
            marginLeft: 10,
          }}
          onClick={() => {
            setTitle(agency.name)
            setCampaign(null)
            setAgency(agency.id)
            setOpened(true)
          }}
        >
          Donate
        </Button>
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {agency.email} • {agency.description}
      </Text>

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Badge
          variant="gradient"
          sx={{
            marginTop: 20,
          }}
          gradient={{ from: 'teal', to: 'lime', deg: 105 }}
        >
          {agency.countries}
        </Badge>
      </div>
    </Paper>
  )
}
