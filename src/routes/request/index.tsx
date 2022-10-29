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
} from '@mantine/core'
export const RequestPage = route('/request',props => {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      image:'',
      country:'',
      description:'',
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
          Request member ship
        </Text>

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            {/* Name */}
            <TextInput
              required
              label="Name"
              placeholder="Name"
              value={form.values.name}
              onChange={event =>
                form.setFieldValue('Name', event.currentTarget.value)
              }
              error={form.errors.Name && 'Invalid Name'}
            />
            {/* phone */}
            <TextInput
              required
              label="phone"
              placeholder="phone"
              value={form.values.phone}
              onChange={event =>
                form.setFieldValue('phone', event.currentTarget.value)
              }
              error={form.errors.phone && 'Invalid phone'}
            />
            {/* image */}
            <TextInput
              required
              label="image"
              placeholder="image"
              value={form.values.image}
              onChange={event =>
                form.setFieldValue('image', event.currentTarget.value)
              }
              error={form.errors.image && 'Invalid email'}
            />
            {/* country */}
            <TextInput
              required
              label="countries"
              placeholder="countries"
              value={form.values.country}
              onChange={event =>
                form.setFieldValue('country', event.currentTarget.value)
              }
              error={form.errors.country && 'Invalid country'}
            />
            {/* description */}
            <TextInput
              required
              label="description"
              placeholder="description"
              value={form.values.description}
              onChange={event =>
                form.setFieldValue('description', event.currentTarget.value)
              }
              error={form.errors.description && 'Invalid description'}
            />
             {/* Password */}
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

          <Group position="apart" mt="xl">
            <Button type="submit">{upperFirst('Request member')}</Button>
          </Group>
        </form>
      </Paper>
  
  </div>
      )
})
