import {
  Box,
  Center,
  Flex,
  Heading,
  Highlight,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Seccion2 = () => {
  const contenido = [
    {
      titulo: "Vaya",
      contenido:
        `Es una conjugación del verbo ‘Ir’.\n 'Vaya' corresponde a la primera y tercera persona singular delsubjuntivo. se utiliza como interjección o exclamación.\n Ejemplo:`,
      frases: [
        "¡Vaya! Nunca hubiese esperado esto de él.",
        "No Vaya a ser que llegues tarde a la reunión.",
        "Te llamaré cuando Vaya para tu casa.",
        "Espero que Vaya un amigo.",
      ],
      color:'purple.700'
    },
    {
      titulo: "Valla",
      contenido:
        `Es una conjugación del verbo ‘Vallar’.\n “Valla” corresponde a la segunda persona singular del imperativo y tercera persona singular del presente indicativo.\n Ejemplos:`,
      frases: [
        "No te acerques a la Valla del estadio durante el partido.",
        "La Valla publicitaria está colocada en un lugar estratégico.",
        "La Valla de seguridad impide el acceso al área restringida.",
        "Tenemos que reparar la Valla que se cayó con el viento.",
      ],
      color:'teal.700'
    },
  ];
  return (
    <>
      {contenido.map((dato) => (
        <Box
          as="section"
          textColor="white"
          className="section"
          textAlign={"center"}
          justifyContent={"flex-start !important"}
        >
          <Flex
            as="article"
            bg={dato.color}
            justifyContent={"space-evenly"}
            align={"center"}
            h={"100vh"}
            flexDir={"column"}
            textTransform={"uppercase"}
          >
            <Heading as="h1" fontSize={"7xl"}>
              {dato.titulo}
            </Heading>
            <Text fontSize={"2xl"} w={"80%"}>{dato.contenido}</Text>
            <SimpleGrid
              as={"ul"}
              columns={2}
              spacing={2}
              textAlign={"left"}
              h={"20%"}
              w={"90%"}
            >
              {dato.frases.map((datos, index) => (
                <Center as="li" key={index} fontSize={"lg"}>
                  <Highlight
                    query={["Valla",'Vaya']}
                    styles={{
                      mx: "1",
                      p: "1",
                      bg: "orange.100",
                      fontWeight: "bold",
                      rounded: "40px",
                    }}
                  >
                    {datos}
                  </Highlight>
                </Center>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default Seccion2;
