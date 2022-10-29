import { route } from '@'
import { useToggle, upperFirst } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { useLogin } from 'ctx'
import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons'
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
} from '@mantine/core'

export const LoginPage = route('/login', props => {
  const { login, loading, error } = useLogin()

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: val =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  })

  return (
    <div>
      <Paper
        radius="md"
        p="xl"
        withBorder
        {...props}
        sx={{
          background: 'white',
          width: 500,
          '@media (max-width: 755px)': {
            width: '90%',
          },
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <Text size="lg" weight={500} sx={{ paddingBottom: 30 }}>
          Welcome, Login with
        </Text>

        <form
          onSubmit={form.onSubmit(() => {
            login(form.values.email, form.values.password)
          })}
        >
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={event =>
                form.setFieldValue('email', event.currentTarget.value)
              }
              error={form.errors.email && 'Invalid email'}
            />

            <PasswordInput
              required
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
          </Stack>

          {error ? (
            <Alert
              icon={<IconAlertCircle size={16} />}
              title="Error!"
              color="red"
            >
              {error}
            </Alert>
          ) : null}

          <Group position="apart" mt="xl">
            <Button type="submit" loading={loading}>
              {upperFirst('login')}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  )
})
