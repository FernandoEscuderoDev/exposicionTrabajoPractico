import { Box, Flex, Heading, Highlight, Text, VStack } from "@chakra-ui/react";
import { contenido } from "./Contenido";

export const SeccionSintesis = () => {
  return (
    <Box
      as="section"
      bgColor={"yellow.600"}
      textColor={"white"}
      className="section"
    >
      <Flex as='article'
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
