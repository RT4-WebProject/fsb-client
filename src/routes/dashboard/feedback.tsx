import { createStyles, Container, Paper, Blockquote } from '@mantine/core'
import { useGetTx } from 'ctx'
import { useEffect } from 'react'

export function Feedbacks() {
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
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {tx.map(t => (
          <Blockquote cite={`– ${t.from}`}>{t.feedback}</Blockquote>
        ))}
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
}

interface TableReviewsProps {
  data: DataFormat[]
}
//
