import {
  Box,
  Flex,
  Heading,
  Highlight,
  Text,
  useToken,
} from "@chakra-ui/react";

export const SeccionSintesis = () => {
  const [yellow500, yellow700] = useToken("colors", ["blue.500", "blue.700"]);
  const sintesis =
    "La palabra “vaya” tiene diferentes sentidos. Puede ser el verbo ir conjugado en primera o tercera persona del subjuntivo, y puede ser la acción de expresar a alguien que se dirija a un lugar.\nLa palabra “valla”, por otro lado, se refiere a una estructura o barrera física para limitar o cerrar un área. Y para su correcta utilización se debe tener en cuenta que el primero es un verbo y el segundo un sustantivo.\nLa palabra “Baya”, se refiere a un fruto carnoso con semillas";
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
            p: { base: 14, lg: 28 },
            bgImage: "/BayaLlorando.png",
            bgSize: "cover",
            left: { base: "250px", lg: "350px" },
            top: { base: "-30px", lg: "-70px" },
          }}
          fontSize={{ base: "5xl", lg: "7xl" }}
        >
          Sintesis
        </Heading>
        <Box as="div" fontSize={{ base: "small", lg: "xl" }} w={"60%"}>
          <Text style={{ whiteSpace: "break-spaces" }}>
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
              {sintesis}
            </Highlight>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
