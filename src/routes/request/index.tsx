import { route } from '@'

import { useToggle, upperFirst } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
  Title,
  Alert,
  Image,
  Grid,
  Box,
} from '@mantine/core'

import { useCreateAgency } from 'ctx'
import { IconAlertCircle } from '@tabler/icons'
import { Link } from 'react-router-dom'

export const RequestPage = route('/request', props => {
  const { done, create, loading, error } = useCreateAgency()

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      image: '',
      description: '',
      password: '',
      countries: '',
      international: false,
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: val =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  })
  if (done) {
    return (
      <GridView>
        <Container size={820} my={40}>
          <Title
            align="center"
            sx={theme => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            Join the Network of Agencies
          </Title>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <Text color="dimmed" size="lg" align="center">
              Thank you for your interest in joining the network of agencies.
              Your request has been sent to the administrator and will be
              reviewed shortly.
            </Text>
            <Group position="center">
              <Button
                to="/"
                size="md"
                component={Link}
                sx={{
                  marginTop: 20,
                }}
              >
                Take me back to home page
              </Button>
            </Group>
          </Paper>
        </Container>
      </GridView>
    )
  }

  return (
    <GridView>
      <Container size={820} my={40}>
        <Title
          align="center"
          sx={theme => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Join the Network of Agencies
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form
            onSubmit={form.onSubmit(() => {
              const { international, countries, ...data } = form.values
              const payload = {
                ...data,
                countries: countries
                  ? countries
                  : international
                  ? 'international'
                  : 'Not Specified',
              }
              create(payload)
            })}
          >
            <Grid
              sx={{
                alignItems: 'flex-start',
              }}
            >
              <Grid.Col xs={12} sm={6}>
                <TextInput
                  label="Agency Name"
                  placeholder="Red Cross"
                  required
                  value={form.values.name}
                  onChange={event =>
                    form.setFieldValue('name', event.currentTarget.value)
                  }
                />
              </Grid.Col>
              <Grid.Col xs={12} sm={6}>
                <TextInput
                  label="Email"
                  type="email"
                  placeholder="contact@redcross.com"
                  required
                  value={form.values.email}
                  onChange={event =>
                    form.setFieldValue('email', event.currentTarget.value)
                  }
                />
              </Grid.Col>
            </Grid>

            <Grid
              sx={{
                alignItems: 'flex-start',
              }}
            >
              <Grid.Col xs={12} sm={6}>
                <TextInput
                  label="Phone"
                  type="phone"
                  placeholder="+1 404 123 4567"
                  required
                  mt="md"
                  value={form.values.phone}
                  onChange={event =>
                    form.setFieldValue('phone', event.currentTarget.value)
                  }
                />
              </Grid.Col>
              <Grid.Col xs={12} sm={6}>
                <TextInput
                  label="Image"
                  placeholder="redcross.svg"
                  required
                  mt="md"
                  value={form.values.image}
                  onChange={event =>
                    form.setFieldValue('image', event.currentTarget.value)
                  }
                />
              </Grid.Col>
            </Grid>

            <TextInput
              label="Brief Description"
              placeholder="Non-profit humanitarian organization that provides emergency assistance"
              required
              mt="md"
              value={form.values.description}
              onChange={event =>
                form.setFieldValue('description', event.currentTarget.value)
              }
            />

            <PasswordInput
              required
              mt="md"
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={event =>
                form.setFieldValue('password', event.currentTarget.value)
              }
              error={
                form.errors.password &&
                'Password should include at least 6 characters'
              }
            />

            <Group position="apart" mt="md">
              <TextInput
                label="Countries of Activity"
                placeholder="US, UK, CA"
                value={form.values.countries}
                onChange={event =>
                  form.setFieldValue('countries', event.currentTarget.value)
                }
              />
              <Checkbox
                label="Worldwide Availibility"
                checked={form.values.international}
                onChange={event =>
                  form.setFieldValue(
                    'international',
                    event.currentTarget.checked
                  )
                }
              />
            </Group>

            {error ? (
              <Alert
                icon={<IconAlertCircle size={16} />}
                title="Error!"
                color="red"
                variant="filled"
                sx={{ marginTop: 20 }}
              >
                {error}
              </Alert>
            ) : null}
            <Button fullWidth mt="xl" type="submit" loading={loading}>
              Request Join
            </Button>
          </form>
        </Paper>
      </Container>
    </GridView>
  )
})

function GridView({ children }) {
  return (
    <Grid>
      <Grid.Col
        xs={0}
        sm={6}
        sx={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Image
          src="/fsb.png"
          alt="fsb"
          sx={{
            width: '50vw !important',
            '@media (max-width: 755px)': {
              display: 'none',
            },
          }}
        />
      </Grid.Col>
      <Grid.Col xs={12} sm={6}>
        <Box
          sx={{
            width: '90%',
            margin: 'auto',
          }}
        >
          {children}
        </Box>
      </Grid.Col>
    </Grid>
  )
}
