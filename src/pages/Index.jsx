import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Home Care Services</Heading>
        <Text fontSize="lg">Providing quality care and support for the elderly and their families.</Text>
        <Button as={Link} to="/about" colorScheme="teal" size="lg">Learn More</Button>
      </VStack>
    </Container>
  );
};

export default Index;