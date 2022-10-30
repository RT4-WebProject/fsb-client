import { createStyles, Text } from '@mantine/core'
import { useEffect } from 'react'
import { useGetRaised } from '../../contexts'

const useStyles = createStyles(theme => ({
  root: {
    display: 'flex',
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    padding: theme.spacing.xl * 1.5,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  title: {
    color: theme.white,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },

  count: {
    color: theme.white,
    fontSize: 32,
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.sm,
    marginTop: 5,
  },

  stat: {
    flex: 1,

    '& + &': {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}))

interface StatsGroupProps {
  data: { title: string; description: string }
}

export function StatsGroup({ data }: StatsGroupProps) {
  const { classes } = useStyles()

  const { raised, getRaised, loading } = useGetRaised()

  useEffect(() => {
    getRaised()
  }, [])

  if (loading) return null
  return (
    <div className={classes.root}>
      <div className={classes.stat}>
        <Text className={classes.count}>{raised}</Text>
        <Text className={classes.title}>{data.title}</Text>
        <Text className={classes.description}>{data.description}</Text>
      </div>
    </div>
  )
}
