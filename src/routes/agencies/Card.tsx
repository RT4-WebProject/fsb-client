import {
  createStyles,
  Card,
  Overlay,
  CardProps,
  Button,
  Text,
} from '@mantine/core'
import { Link } from 'react-router-dom'

interface ImageActionBannerProps {
  name: React.ReactNode
  description: React.ReactNode
  image: string
  id: number
}

export function ImageActionBanner({
  name,
  description,
  image,
  style,
  className,
  ...others
}: ImageActionBannerProps &
  Omit<CardProps, keyof ImageActionBannerProps | 'children'>) {
  const { classes, cx, theme } = useStyles()

  return (
    <Card
      radius="md"
      style={{ backgroundImage: `url(${image})`, ...style }}
      className={cx(classes.card, className)}
      {...others}
    >
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
        opacity={0.55}
        zIndex={0}
      />

      <div className={classes.content}>
        <Text size="lg" weight={900} className={classes.title}>
          {name}
        </Text>

        <Text size="sm" className={classes.description}>
          {description}
        </Text>
        <Button
          className={classes.action}
          variant="white"
          color="dark"
          component={Link}
          size="xs"
          to={`/agencies/${others.id}`}
        >
          Go to profile
        </Button>
      </div>
    </Card>
  )
}

const useStyles = createStyles(theme => ({
  card: {
    height: 240,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  content: {
    position: 'absolute',
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  action: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    fontWeight: 700,
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    color: theme.white,
    maxWidth: 220,
  },
}))
