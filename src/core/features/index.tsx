import { createStyles, Text, SimpleGrid, Container } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin, TablerIcon, IconTransferIn, IconWorld, IconCheck } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: 100,
    width: 160,
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: TablerIcon;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={38} className={classes.icon} stroke={1.5} />
        <Text weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="dimmed" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconTransferIn,
    title: 'Transparent Transactions',
    description:
      'Double check every transaction you make. Every transaction is recorded on the blockchain and is visible to everyone.',
  },
  {
    icon: IconWorld,
    title: 'Worldwide Payments',
    description:
      'Stripe supports payments in over 135 currencies across 200+ countries and territories. Cryptocurrency is an option.',
  },
  {
    icon: IconCheck,
    title: 'United Nations Global Compact',
    description:
      'We are committed to the 10 principles of the UN Global Compact.',
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
      <Container pt={30} pb={30} size="lg" style={{ backgroundColor: '#fff' }}>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
    </div>
  );
}