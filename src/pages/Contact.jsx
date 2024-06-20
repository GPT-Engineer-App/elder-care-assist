import { Box, Text, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => (
  <Box p={4}>
    <Heading mb={4} textAlign="center">Contact Us</Heading>
    <VStack spacing={4} align="stretch" maxW="container.md" mx="auto">
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="message">
        <FormLabel>Message</FormLabel>
        <Textarea />
      </FormControl>
      <Button colorScheme="teal" size="lg">Submit</Button>
    </VStack>
  </Box>
);

export default Contact;