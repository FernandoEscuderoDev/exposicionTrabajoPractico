import { Box, Heading, VStack, useToken } from "@chakra-ui/react";

export const Juego = () => {
  const [yellow500, yellow700] = useToken("colors", [
    "pink.700",
    "pink.900",
  ]);
  return (
    <Box w={"100%"} className="section">
      <VStack
        justifyContent={"center"}
        h={"100vh"}
        bgGradient={`linear(to-t, ${yellow700}, ${yellow500})`}
        alignItems={"center"}
        gap={{ base: 2, xl: 4 }}
      >
        <Heading
          as="h2"
          color={"white"}
          textShadow={"0px 6px #000"}
          textTransform={"uppercase"}
          position={"relative"}
          fontSize={{ base: "4xl", xl: "7xl" }}
        >
          Hora de jugar
        </Heading>
        <Box
          position={"relative"}
          boxShadow={"dark-lg"}
          rounded={"3xl"}
          w={"72.50%"}
          h={"75%"}
        >
          <Box
            as="iframe"
            title="'Valla, Vaya, Baya'"
            frameborder="0"
            width="100%"
            height="100%"
            margin={"auto"}
            position={"absolute"}
            rounded={"3xl"}
            top={0}
            left={0}
            src="https://view.genial.ly/647629774b8e7900125d4a65"
            type="text/html"
            allowscriptaccess="always"
            allowfullscreen="true"
            scrolling="no"
            allownetworking="all"
          />
        </Box>
      </VStack>
    </Box>
  );
};
