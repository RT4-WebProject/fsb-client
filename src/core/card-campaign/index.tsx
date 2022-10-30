import {
  Box,
  Button,
  createStyles,
  Paper,
  Progress,
  Text,
  ThemeIcon,
} from '@mantine/core'
import { IconColorSwatch } from '@tabler/icons'

interface CardGradientProps {
  title: string
  description: string
  withLink?: boolean
  goal: number
}

const dollaFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export function Card({
  title,
  description,
  withLink = true,
  goal,
}: CardGradientProps) {
  const { classes } = useStyles()
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: 'pink', to: 'orange' }}
      >
        <IconColorSwatch size={28} stroke={1.5} />
      </ThemeIcon>
      <Text size="xl" weight={500} mt="md">
        {title}
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        {description}
      </Text>
      <Box
        sx={{
          marginTop: 20,
        }}
      >
        <Text size="xs" transform="uppercase" weight={700} color="dimmed">
          Campaign Goal
        </Text>
        <Text size="lg" weight={500}>
          $5.431 / {dollaFormatter.format(goal)}
        </Text>
        <Progress value={54.31} mt="md" size="lg" radius="xl" color="green" />
      </Box>
      {withLink ? (
        <Button
          sx={{
            marginTop: 20,
          }}
          variant="gradient"
          gradient={{ deg: 0, from: 'pink', to: 'orange' }}
        >
          Donate to this campaign
        </Button>
      ) : null}
    </Paper>
  )
}

const useStyles = createStyles(theme => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.pink[6],
        theme.colors.orange[6]
      ),
    },
  },
}))
