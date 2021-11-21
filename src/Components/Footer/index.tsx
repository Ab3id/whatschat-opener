import {
    Box,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Footer() {
    return (
      <Box
        h="60px"
        w="100%"
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <Text>Made in 🇹🇿 with ❤️ & ☕️ by <Link href="https://github.com/Ab3id" isExternal>Ab3id</Link></Text>
          </Stack>
          <Text fontSize="xs">i do not in any way collect your data</Text>
        </Container>
      </Box>
    );
  }