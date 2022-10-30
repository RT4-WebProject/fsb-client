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
  Alert,
} from '@mantine/core'
import { useMyCampaigns } from 'ctx'
import { IconAlertCircle } from '@tabler/icons'

export function CreateCampaign(props) {
  const { createCampaign } = useMyCampaigns()
  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      country: '',
      link: '',
      image: '',
      goal: 0,
    },
  })
  return (
    <div
      style={{
        width: '90%',
        margin: 'auto',
      }}
    >
      <Paper
        radius="md"
        p="xl"
        withBorder
        {...props}
        sx={{
          background: 'white',
          '@media (max-width: 755px)': {
            width: '90%',
          },
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: 80,
        }}
      >
        <Text size="lg" weight={500} sx={{ paddingBottom: 30 }}>
          Create new campaign
        </Text>

        <form
          onSubmit={form.onSubmit(() => {
            createCampaign.create(form.values)
          })}
        >
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
              value={form.values.country}
              onChange={event =>
                form.setFieldValue('country', event.currentTarget.value)
              }
              error={form.errors.country && 'Invalid country '}
            />
            {/* link */}
            <TextInput
              required
              label=" link "
              placeholder=" link "
              value={form.values.link}
              onChange={event =>
                form.setFieldValue('link', event.currentTarget.value)
              }
              error={form.errors.link && 'Invalid  link '}
            />
            {/* image */}
            <TextInput
              required
              label=" image "
              placeholder=" image "
              value={form.values.image}
              onChange={event =>
                form.setFieldValue('image', event.currentTarget.value)
              }
              error={form.errors.image && 'Invalid  image '}
            />

            <TextInput
              required
              label="Target amount"
              placeholder="$2500"
              value={form.values.goal}
              onChange={event =>
                form.setFieldValue(
                  'goal',
                  isNaN(Number(event.currentTarget.value))
                    ? 0
                    : Number(event.currentTarget.value)
                )
              }
              error={form.errors.image && 'Invalid  image '}
            />
          </Stack>

          {createCampaign.error ? (
            <Alert
              icon={<IconAlertCircle size={16} />}
              title="Error!"
              color="red"
              variant="filled"
              sx={{ marginTop: 20 }}
            >
              {createCampaign.error}
            </Alert>
          ) : null}
          <Group position="apart" mt="xl">
            <Button type="submit" loading={createCampaign.loading}>
              {upperFirst('Create Campaign')}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  )
}
