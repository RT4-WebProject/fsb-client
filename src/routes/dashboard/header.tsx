import { Avatar, Text, Button, Paper, Badge } from '@mantine/core'
import { useGetMe } from 'ctx'

export function Header() {
  const { me, authentified } = useGetMe()
  const { avatar, name, email, job } = {
    avatar: 'https://avatars.githubusercontent.com/u/14338007?v=4',
    name: 'Mantine',
    email: 'chill@',
    job: 'Frontend Developer',
  }

  if (!me || authentified === null) return null

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
        src={me.image}
        size={200}
        radius={10000}
        mx="auto"
        sx={{
          border: '7px solid #FF8C00',
          padding: 1,
        }}
      />
      <Text align="center" size="lg" weight={500} mt="md">
        {me.name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {me.email} • {me.description}
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
          {me.countries}
        </Badge>
      </div>
    </Paper>
  )
}
