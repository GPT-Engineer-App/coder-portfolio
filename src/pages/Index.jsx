import React from "react";
import { Box, Button, Container, Heading, IconButton, Image, Link, Stack, Text, useColorMode, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaSun, FaMoon, FaPlus } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.md" py={10}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={5}>
        <Heading as="h1" size="xl">
          John Doe
        </Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />
      </Box>
      <Stack spacing={5} alignItems="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA4ODM3NDY3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile image" />
        <Heading as="h2" size="md">
          Full-Stack Developer
        </Heading>
        <Text textAlign="center" maxW="400px">
          I'm a passionate Full-Stack Developer with 5 years of experience building web applications using technologies like React, Node.js, and GraphQL.
        </Text>
        <Stack direction="row" spacing={4}>
          <Link href="https://github.com/" isExternal>
            <IconButton aria-label="Github" icon={<FaGithub />} />
          </Link>
          <Link href="https://linkedin.com/in/" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} />
          </Link>
          <Link href="https://twitter.com/" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          </Link>
        </Stack>
        <Button colorScheme="blue" leftIcon={<FaPlus />}>
          View My Projects
        </Button>
      </Stack>
      <VStack spacing={8} mt={10}>
        <Heading as="h3" size="lg">
          About Me
        </Heading>
        <Text>I have a strong interest in creating user-friendly interfaces and improving website performance. I believe in writing clean, maintainable code and I am always looking to learn new technologies and best practices.</Text>
        <Heading as="h3" size="lg">
          Skills
        </Heading>
        <Text>JavaScript (ES6+), React, Vue.js, Node.js, Express, MongoDB, SQL, RESTful APIs, GraphQL, Docker, Kubernetes, Jest, Webpack, Git, CI/CD, Agile Methodologies</Text>
        <Heading as="h3" size="lg">
          Experience
        </Heading>
        <Text>I've worked for both startups and large corporations, where I have had the opportunity to lead projects and collaborate with teams of talented developers to deliver high-quality software solutions.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
