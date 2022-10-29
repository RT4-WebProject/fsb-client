import { createStyles, Text, Card, RingProgress, Group, Button } from '@mantine/core';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1,
  },

  lead: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1,
  },

  inner: {
    display: 'flex',

    [theme.fn.smallerThan(350)]: {
      flexDirection: 'column',
    },
  },

  ring: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',

    [theme.fn.smallerThan(350)]: {
      justifyContent: 'center',
      marginTop: theme.spacing.md,
    },
  },
}));

interface StatsRingCardProps {
  title: string;
  completed: number;
  total: number;
  stats: {
    value: number;
    label: string;
  }[];
  agency: string;
  link: string;
}

export function StatsRingCard({ title, completed, total, stats, agency, link }: StatsRingCardProps) {
  const { classes, theme } = useStyles();
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className={classes.label}>{stat.value}</Text>
      <Text size="xs" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>
        <div>
          <Text size="xl" className={classes.label}>
            {title}
          </Text>
          <div>
            <Text className={classes.lead} mt={30}>
              {formatter.format(completed)}
            </Text>
            <Text size="xs" color="dimmed">
              Raised
            </Text>
            <Text size="md">
              {agency}
            </Text>
            <Button mt={5} onClick={()=>window.open(link)}>Take Part</Button>
          </div>
          <Group mt="lg">{items}</Group>
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[{ value: (completed / total) * 100, color: theme.primaryColor }]}
            label={
              <div>
                <Text align="center" size="lg" className={classes.label} sx={{ fontSize: 22 }}>
                  {((completed / total) * 100).toFixed(0)}%
                </Text>
                <Text align="center" size="xs" color="dimmed">
                  Completed
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}