import {
  createStyles,
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  ScrollArea,
  Container,
  Paper,
} from '@mantine/core'
import { useGetTx } from 'ctx'
import { useEffect } from 'react'

function Row(row: DataFormat) {
  const { classes, theme } = useStyles()

  return (
    <tr key={row.id}>
      <td>{row.from}</td>
      <td>{row.amount}</td>
      <td>{row.campaign}</td>
      <td>
        {row.tx ? (
          /*<a target="__blank" href={`https://goerli.etherscan.io/tx/${row.tx}`}>
            EtherScan
          </a>*/
          row.tx
        ) : null}
      </td>
    </tr>
  )
}

export function TxList() {
  const { tx, getTx, loading } = useGetTx()

  useEffect(() => {
    getTx()
  }, [])

  if (loading) return null

  return (
    <Container my={80} size={1000}>
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
          <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
            <thead>
              <tr>
                <th>Donated From</th>
                <th>Amount Donated</th>
                <th>Campaign / Agency</th>
                <th>TX</th>
              </tr>
            </thead>
            <tbody>
              {tx &&
                tx.map(t => (
                  <Row
                    key={t.id}
                    id={t.id}
                    from={t.from}
                    amount={t.amount}
                    campaign={t.campaignId?.name ? t.campaignId?.name : t.agencyID?.name}
                    tx={t.pk}
                  />
                ))}
            </tbody>
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
  from: string
  amount: number
  campaign: string
  tx: string
}

interface TableReviewsProps {
  data: DataFormat[]
}
//
