import {
  createStyles,
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  ScrollArea,
  Paper,
  Container,
  Switch,
  Badge,
} from '@mantine/core'
import { useApproveAgency } from 'ctx'

function Row(row: DataFormat) {
  const { loading, approve } = useApproveAgency()
  return (
    <tr key={row.id}>
      <td>{row.name}</td>
      <td>
        <Badge
          variant="gradient"
          gradient={{ from: 'teal', to: 'lime', deg: 105 }}
        >
          {row.countries}
        </Badge>
      </td>
      <td>{row.description}</td>
      <td>
        <Switch
          onChange={() => {
            if (row.approved) return
            approve(row.id)
          }}
          defaultChecked={row.approved}
          label={row.approved ? 'Approved' : 'Pending'}
          color="red"
          sx={{
            border: '1px solid #eaeaea',
          }}
          disabled={loading}
        />
      </td>
    </tr>
  )
}

export function AgenciesList({ data }: TableReviewsProps) {
  return (
    <Container my={80} size={900}>
      <Paper
        radius="md"
        p="xl"
        withBorder
        sx={{
          background: 'white',
          '@media (max-width: 755px)': {
            width: '100%',
            margin: '0 auto',
          },
          transform: 'translateY(-60px)',
          marginRight: '40px',
          marginLeft: '40px',
          zIndex: 2,
        }}
      >
        <ScrollArea>
          <Table verticalSpacing="xs">
            <thead>
              <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{data && data.map(row => <Row {...row} />)}</tbody>
          </Table>
        </ScrollArea>
      </Paper>
    </Container>
  )
}
const useStyles = createStyles(theme => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `3px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}))

interface DataFormat {
  id: number
  name: string
  countries: string
  description: string
  approved: boolean
}

interface TableReviewsProps {
  data: DataFormat[]
}
//
