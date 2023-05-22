import { Box, Flex, Heading } from "@chakra-ui/react";

const Seccion = () => {
  return (
    <Box
      as="section"
      textColor="white"
      className="section"
      justifyContent={"flex-start !important"}
    >
      <Flex as='article' bg={"blue.500"} justifyContent={'space-evenly'} align={"center"} h={'100vh'} flexDir={'column'} textTransform={'uppercase'}>
        <Heading as="h1" fontSize={'5xl'}>Uso del 'Vaya, Valla'</Heading>
        <Heading as="h2" fontSize={"xl"}>Comprensión y producción de textos</Heading>
      </Flex>
    </Box>
  );
};

export default Seccion;
