import {
  createStyles,
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  ScrollArea,
} from '@mantine/core'

function Row(row: DataFormat) {
  const { classes, theme } = useStyles()

  return (
    <tr key={row.id}>
      <td>{row.from}</td>
      <td>{row.amount}</td>
      <td>{row.campaign}</td>
      <td>
        <Group position="apart">
          <Text size="xs" color="teal" weight={700}>
            {row.progress.toFixed(0)}%
          </Text>
          <Text size="xs" color="red" weight={700}>
            {(100 - row.progress).toFixed(0)}%
          </Text>
        </Group>
        <Progress
          classNames={{ bar: classes.progressBar }}
          sections={[
            {
              value: row.progress,
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.teal[9]
                  : theme.colors.teal[6],
            },
            {
              value: 100 - row.progress,
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.red[9]
                  : theme.colors.red[6],
            },
          ]}
        />
      </td>
    </tr>
  )
}

export function TxList({ data }: TableReviewsProps) {
  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th>Donated From</th>
            <th>Amount Donated</th>
            <th>Campaign / Agency</th>
            <th>Goal Progress</th>
          </tr>
        </thead>
        <tbody>
          <Row
            id={1}
            from="John Doe"
            amount={100}
            campaign="Campaign 1"
            progress={50}
          />
          <Row
            id={2}
            from="Jane Doe"
            amount={100}
            campaign="Campaign 2"
            progress={50}
          />
          <Row
            id={3}
            from="John Doe"
            amount={100}
            campaign="Campaign 3"
            progress={50}
          />
          <Row
            id={4}
            from="Jane Doe"
            amount={100}
            campaign="Campaign 4"
            progress={50}
          />
        </tbody>
      </Table>
    </ScrollArea>
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
  from: string
  amount: number
  campaign: string
  progress: number
}

interface TableReviewsProps {
  data: DataFormat[]
}
//
