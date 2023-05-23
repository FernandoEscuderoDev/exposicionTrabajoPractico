import { Box, Flex, Heading } from "@chakra-ui/react";

const Seccion = () => {
  return (
    <Box as="section" className="section">
      <Flex
        as="article"
        bg={"red.600"}
        justifyContent={"space-evenly"}
        align={"center"}
        h={"100vh"}
        flexDir={"column"}
        textTransform={"uppercase"}
      >
        <Heading
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          w={"32%"}
          h={"md"}
          bg={"red.500"}
          rounded={"full"}
          boxShadow={"2xl"}
          as="h1"
          fontSize={"5xl"}
        >
          Uso del "Vaya", "Valla"
        </Heading>
        <Heading as="h3" fontSize={"xl"}>
          Comprensión y producción de textos
        </Heading>
      </Flex>
    </Box>
  );
};

export default Seccion;
