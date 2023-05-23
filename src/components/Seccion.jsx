import { Box, Flex, Heading } from "@chakra-ui/react";

const Seccion = () => {
  return (
    <Box
      as="section"
      bgImage={
        "https://images.pexels.com/photos/3219951/pexels-photo-3219951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      bgSize={"cover"}
      bgAttachment={"fixed"}
      bgPosition={"100% 100%"}
      bgRepeat={"no-repeat"}
      className="section"
    >
      <Flex
        as="article"
        justifyContent={"space-evenly"}
        align={"center"}
        h={"100vh"}
        flexDir={"column"}
        textTransform={"uppercase"}
        bgColor={'blackAlpha.400'}
        backdropFilter="auto"
        backdropBlur={"base"}
        textColor={"white"}
      >
        <Heading
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          w={"32%"}
          h={"md"}
          rounded={"full"}
          boxShadow={"3xl"}
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
