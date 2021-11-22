import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  extendTheme,
  Heading,
  Spacer,
  FormControl,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./Utils/ColorModeSwitcher"
import { Logo } from "./Logo"

import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"
import Footer from "./Components/Footer"
import { useState } from "react"

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
})
type props = {}

const App:React.FC<props> = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setphoneNumberError] = useState("")


  const handleSendMessage = () => {
    if(phoneNumber.length < 9 ){
      //set phone number error
      setphoneNumberError("Incorrect / Unsupported Phone number")
    }else{
      //open whatsapp chat
      setphoneNumberError("")
      var linkUrl = `https://wa.me/${phoneNumber}`;
      window.open(linkUrl,"_blank")
    }
  }
  return(
    <>
  <ChakraProvider theme={theme}>
    <Box textAlign="center" >
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={5} >
          <Logo h="15vmin" pointerEvents="none" />
          <Heading
            fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}
            lineHeight={'110%'}>
            Start a&nbsp;
            <Text as={'span'} color={'green.400'}>
              Whatsapp
            </Text> chat
            <br />
            <Text as={'span'}>
              with a number without saving to contacts
            </Text>
          </Heading>
          
          <Stack w={{base:'100%', sm:'80%', md:'40%', lg: '30%'}} direction={{base: 'row', sm: 'column', md: 'column', lg: 'row'}}>
          <FormControl id="phone-number">
              <Input isInvalid={phoneNumberError.length > 0 ? true : false} errorBorderColor="red.300" type="text" size="md" onChange={(e)=>{setPhoneNumber(e.target.value)}} required placeholder="Enter a Whatsapp number ex: +25576630XXXX"/> 
              <Text fontSize="xs" color={'red.500'}>{phoneNumberError}</Text>
          </FormControl>
          <Button p={5} size="sm" onClick={(e)=>{e.preventDefault(); handleSendMessage()}} colorScheme="teal" variant="outline">
            Send Message
          </Button>
          </Stack>
          <Spacer/>
        <Footer/>
        </VStack>
       
      </Grid>
    </Box>
  </ChakraProvider>
  </>
);
}

export default App
