import { Text, Box, Image } from '@mantine/core'

export function Logo() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image src="/favicon.svg" width={30} height={30} />
      <Text
        sx={{
          marginLeft: 10,
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        Taiii
      </Text>
    </Box>
  )
}
