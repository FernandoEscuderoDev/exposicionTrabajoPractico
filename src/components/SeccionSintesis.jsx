import {
  Box,
  Flex,
  Heading,
  Highlight,
  Text,
  VStack,
  useToken,
} from "@chakra-ui/react";

export const SeccionSintesis = () => {
  const [yellow500, yellow700] = useToken("colors", ["blue.500", "blue.700"]);
  const sintesis = [
    "La palabra “vaya” tiene diferentes sentidos. Puede ser el verbo ir conjugado en primera o tercera persona del subjuntivo, y puede ser la acción de expresar a alguien que se dirija a un lugar.",
    "La palabra “valla”, por otro lado, se refiere a una estructura o barrera física para limitar o cerrar un área. Y para su correcta utilización se debe tener en cuenta que el primero es un verbo y el segundo un sustantivo.",
    "La palabra “Baya”, se refiere a un tipo de fruto pequeño y redondo que generalmente se encuentra en arbustos o árboles. Son comúnmente utilizadas en la alimentación humana y animal, así como para hacer mermeladas y postres."
  ];
  return (
    <Box
      as="section"
      bgGradient={`linear(to-t, ${yellow700}, ${yellow500})`}
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
        <Heading
          as="h2"
          textShadow={"0px 6px #000"}
          position={"relative"}
          _before={{
            content: '" "',
            position: "absolute",
            p: { base: 16, xl: 28 },
            bgImage: "/BayaLlorando.png",
            bgSize: "cover",
            left: { base: "240px", xl: "460px" },
            top: { base: "-30px", xl: "-70px" },
          }}
          fontSize={{ base: "4xl", xl: "7xl" }}
        >
          Sintesis
        </Heading>
        <VStack
          alignItems={"flex-start"}
          gap={{ base: 2, md: 4, xl: 8 }}
          fontSize={{ base: "xs", md: "sm", xl: "xl" }}
          w={"60%"}
        >
          {sintesis.map((dato, index) => (
            <Text key={index} style={{ whiteSpace: "break-spaces" }}>
              <Highlight
                query={["“vaya”", "“valla”", "“baya”"]}
                styles={{
                  mx: "1",
                  p: "1",
                  bg: "black",
                  color: "white",
                  fontWeight: "bold",
                  rounded: "40px",
                }}
              >
                {dato}
              </Highlight>
            </Text>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};
