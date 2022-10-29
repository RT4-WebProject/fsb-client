import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';

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
    <Container size={820} my={40}>
    <Title
      align="center"
      sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
    >
      Join the Network of Agencies
    </Title>

    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
    <TextInput label="Agency Name" placeholder="Red Cross" required />
    <TextInput label="Brief Description" placeholder="Non-profit humanitarian organization that provides emergency assistance" required mt="md"/>
      <TextInput label="Website" placeholder="redcross.org" required mt="md"/>
      <TextInput label="Email" type="email" placeholder="contact@redcross.com" required mt="md"/>
      <TextInput label="Phone" type="phone" placeholder="+1 404 123 4567" required mt="md"/>
      <TextInput label="Social" type="text" placeholder="@redcross" mt="md"/>

      <Group position="apart" mt="md">
        <TextInput label="Countries of Activity" placeholder="US, UK, CA" />
        <Checkbox label="Worldwide Availibility" />
      </Group>
      <Button fullWidth mt="xl">
        Request Join
      </Button>
    </Paper>
  </Container>
      )
})

