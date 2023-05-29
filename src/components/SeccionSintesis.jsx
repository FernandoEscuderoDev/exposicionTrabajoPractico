import {
  Box,
  Flex,
  Heading,
  Highlight,
  Text,
  VStack,
  useToken,
} from "@chakra-ui/react";
import { contenido } from "./Contenido";

export const SeccionSintesis = () => {
  const [yellow600, yellow700] = useToken("colors", [
    "yellow.600",
    "yellow.700",
  ]);
  return (
    <Box
      as="section"
      bgGradient={`linear(to-t, ${yellow700}, ${yellow600})`}
      textColor={"white"}
      className="section"
    >
      <Flex
        as="article"
        justifyContent={"space-evenly"}
        align={"center"}
        h={"100vh"}
        flexDir={"column"}
        textTransform={"uppercase"}
      >
        <Heading as="h2" textShadow={"6px 3px #000"} fontSize={"7xl"}>
          Sintesis
        </Heading>
        <VStack fontSize={"xl"} w={"60%"} gap={10}>
          {contenido.map((dato, index) => (
            <Text key={index}>
              <Highlight
                query={["«Valla»", "«Vaya»", "«Baya»"]}
                styles={{
                  mx: "1",
                  p: "1",
                  bg: "black",
                  color: "white",
                  fontWeight: "bold",
                  rounded: "40px",
                }}
              >
                {dato.sintesis}
              </Highlight>
            </Text>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};
