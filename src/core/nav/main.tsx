import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  NavLink,
  Anchor,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from 'react-router-dom'
import { Logo } from '../logo'
import { useGetMe, useLogout } from 'ctx'

export function Navbar() {
  const { authentified, me } = useGetMe()
  const logout = useLogout()
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const { classes, theme } = useStyles()

  if (authentified === null) return null

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <Header
        height={60}
        px="md"
        sx={{
          backgroundColor: 'white',
        }}
      >
        <Group position="apart" sx={{ height: '100%' }}>
          <Logo />

          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Anchor className={classes.link} component={Link} to="/">
              Home
            </Anchor>
            <Anchor className={classes.link} component={Link} to="/agencies">
              Agencies
            </Anchor>
            <Anchor className={classes.link} component={Link} to="/campaigns">
              Campaigns
            </Anchor>
          </Group>

          {authentified ? (
            <Group className={classes.hiddenMobile}>
              <Button
                variant="default"
                component={Link}
                to={me.role === 'admin' ? '/admin' : '/dash'}
              >
                Dashboard
              </Button>
              <Button color="red" onClick={logout}>
                Logout
              </Button>
            </Group>
          ) : (
            <Group className={classes.hiddenMobile}>
              <Button variant="default" component={Link} to="/login">
                Log in
              </Button>
              <Button component={Link} to="/request">
                Join the Pool
              </Button>
            </Group>
          )}

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Taiii"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Anchor className={classes.link} component={Link} to="/">
            Home
          </Anchor>
          <Anchor className={classes.link} component={Link} to="/agencies">
            Agencies
          </Anchor>
          <Anchor className={classes.link} component={Link} to="/campaigns">
            Campaigns
          </Anchor>

          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />
          <Group position="center" grow pb="xl" px="md">
            {authentified ? (
              <>
                <Button
                  variant="default"
                  component={Link}
                  to={me.role === 'admin' ? '/admin' : '/dash'}
                >
                  Dashboard
                </Button>
                <Button color="red" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="default" component={Link} to="/login">
                  Log in
                </Button>
                <Button component={Link} to="/request">
                  Join the Pool
                </Button>
              </>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}

const useStyles = createStyles(theme => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))
