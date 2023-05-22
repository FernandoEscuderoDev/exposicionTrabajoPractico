import { Box, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";

const Seccion2 = () => {
  const contenidoLista = [
    "No te acerques a la Valla del estadio durante el partido.",
    "La Valla publicitaria está colocada en un lugar estratégico.",
    ,
    "La Valla de seguridad impide el acceso al área restringida.",
    ,
    "Tenemos que reparar la Valla que se cayó con el viento.",
  ];
  return (
    <Box
      as="section"
      textColor="white"
      className="section"
      textAlign={"center"}
      justifyContent={"flex-start !important"}
    >
      <Flex
        as="article"
        bg={"orange"}
        justifyContent={"space-evenly"}
        align={"center"}
        h={"100vh"}
        flexDir={"column"}
        textTransform={"uppercase"}
      >
        <Heading as="h1" fontSize={"5xl"}>
          Valla
        </Heading>
        <Text fontSize={"2xl"} w={"80%"}>
          Es una conjugación del verbo ‘Vallar’.
          <br />
          “Valla” corresponde a la segunda persona singular del imperativo y
          tercera persona singular del presente indicativo.
          <br />
          Ejemplos:
        </Text>
        <Wrap>
          {contenidoLista.map((datos) => {
            <WrapItem>{datos}</WrapItem>;
          })}
        </Wrap>
      </Flex>
    </Box>
  );
};

export default Seccion2;
