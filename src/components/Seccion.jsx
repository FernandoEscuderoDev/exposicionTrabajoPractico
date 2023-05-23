import { Box, Flex, Heading } from "@chakra-ui/react";

const Seccion = () => {
  return (
    <Box
      as="section"
      className="section"
      justifyContent={"flex-start !important"}
    >
      <Flex
        as="article"
        bg={"red.600"}
        justifyContent={"space-evenly"}
        align={"center"}
        h={"100vh"}
        flexDir={"column"}
        textTransform={"uppercase"}
      >
        <Heading display={'flex'} alignItems={"center"} justifyContent={'center'} textAlign={"center"} w={"30%"} h={"md"} bg={'red.500'} rounded={"full"} as="h1" fontSize={"5xl"}>
          Uso del "Vaya", "Valla"
        </Heading>
        <Heading as="h2" fontSize={"xl"}>
          Comprensión y producción de textos
        </Heading>
      </Flex>
    </Box>
  );
};

export default Seccion;
