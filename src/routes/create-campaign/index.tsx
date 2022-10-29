import { route} from '@'
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

export const CreateCampaign = route('/CreateCampaign', props => {
    const form = useForm({
        initialValues: {
          email: '',
          title: '',
          description: '',
          country: '',
          link:'',
          image:'',
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
          Create new campaign
        </Text>

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            {/* title */}
            <TextInput
              required
              label="title"
              placeholder="title"
              value={form.values.title}
              onChange={event =>
                form.setFieldValue('title', event.currentTarget.value)
              }
              error={form.errors.title && 'Invalid title'}
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
            {/* country */}
            <TextInput
              required
              label="country "
              placeholder="country "
              value={form.values.country }
              onChange={event =>
                form.setFieldValue('country ', event.currentTarget.value)
              }
              error={form.errors.country  && 'Invalid country '}
            />
            {/* link */}
            <TextInput
              required
              label=" link "
              placeholder=" link "
              value={form.values.link }
              onChange={event =>
                form.setFieldValue(' link ', event.currentTarget.value)
              }
              error={form.errors.link  && 'Invalid  link '}
            />
            {/* image */}
            <TextInput
              required
              label=" image "
              placeholder=" image "
              value={form.values. image }
              onChange={event =>
                form.setFieldValue(' image ', event.currentTarget.value)
              }
              error={form.errors.image  && 'Invalid  image '}
            />
          </Stack>

          <Group position="apart" mt="xl">
            <Button type="submit">{upperFirst('Create Campaign')}</Button>
          </Group>
        </form>
      </Paper>
    </div>
    )
  
})
