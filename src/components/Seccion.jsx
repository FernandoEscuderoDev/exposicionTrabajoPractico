import { Box, Flex, Heading } from "@chakra-ui/react";
import { Bloqueador } from "./Bloqueador";

const Seccion = () => {
  return (
    <Box
      as="section"
      bgImage={"/bgSeccion.jpg"}
      bgSize={"cover"}
      bgPosition={"100% 100%"}
      bgRepeat={"no-repeat"}
      className="section"
    >
      <Flex
        as="article"
        justifyContent={"space-evenly"}
        align={"center"}
        h={"100vh"}
        w="100%"
        flexDir={"column"}
        textTransform={"uppercase"}
        bgColor={"blackAlpha.500"}
        backdropFilter="auto"
        backdropBlur={"md"}
        textColor={"white"}
      >
        <Heading
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          w={"35%"}
          h={"xl"}
          as="h1"
          fontSize={{ base: "4xl", xl: "6xl" }}
        >
          Uso del "Vaya", "Valla" y "Baya"
        </Heading>
        <Bloqueador/>
        <Heading as="h3" pb={"14"} fontSize={{ base: "lg", xl: "xl" }}>
          Comprensión y producción de textos
        </Heading>
      </Flex>
    </Box>
  );
};

export default Seccion;
