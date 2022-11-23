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
import { useCreateTx } from 'ctx'
import { IconAlertCircle } from '@tabler/icons'

export function DonationForm(props) {
  const { createTx, loading, error } = useCreateTx()
  const form = useForm({
    initialValues: {
      from: '',
      fromCountry: '',
      feedback: '',
    },
  })

  //   campaignID: string;
  //   agencyID: string;

  return (
    <div>
      <form
        onSubmit={form.onSubmit(() => {
          createTx({
            ...form.values,
            ...props,
          })
        })}
      >
        <Stack>
          {/* title */}
          <TextInput
            required
            label="Your Name"
            placeholder="John Doe"
            value={form.values.from}
            onChange={event =>
              form.setFieldValue('from', event.currentTarget.value)
            }
            error={form.errors.title && 'Invalid title'}
          />
          {/* description */}
          <TextInput
            required
            label="Say something nice"
            placeholder="I support you!"
            value={form.values.feedback}
            onChange={event =>
              form.setFieldValue('feedback', event.currentTarget.value)
            }
            error={form.errors.description && 'Invalid description'}
          />
          {/* country */}
          <TextInput
            required
            label="Your Country"
            placeholder="Wakanda"
            value={form.values.fromCountry}
            onChange={event =>
              form.setFieldValue('fromCountry', event.currentTarget.value)
            }
            error={form.errors.country && 'Invalid country '}
          />
        </Stack>

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
        <Group position="apart" mt="xl">
          <Button type="submit" loading={loading}>
            {upperFirst('Process Donation')}
          </Button>
        </Group>
      </form>
    </div>
  )
}
