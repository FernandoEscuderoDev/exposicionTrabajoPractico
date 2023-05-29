import {
  Box,
  Center,
  Flex,
  Heading,
  Highlight,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { contenido } from "./Contenido";

const Seccion2 = () => {
  return (
    <>
      {contenido.map((dato, index) => (
        <Box
          as="section"
          key={index}
          textColor="white"
          className="section"
          textAlign={"center"}
        >
          <Flex
            as={"article"}
            bgGradient={`linear(to-t, ${dato.color})`}
            justifyContent={"space-evenly"}
            align={"center"}
            h={"100vh"}
            flexDir={"column"}
            textTransform={"uppercase"}
          >
            <Heading
              as="h2"
              textShadow={"6px 3px #000"}
              position={"relative"}
              _before={{
                content: '" "',
                position: "absolute",
                p: 28,
                bgImage:dato.image,
                bgSize:'cover',
                left: "350px",
                top:'-50px'
              }}
              fontSize={"7xl"}
            >
              {dato.titulo}
            </Heading>
            <Text
              fontSize={"2xl"}
              w={"80%"}
              style={{ whiteSpace: "break-spaces" }}
            >
              {dato.contenido}
            </Text>
            <SimpleGrid as={"ul"} columns={2} spacing={2} h={"20%"} w={"90%"}>
              {dato.frases.map((datos, index) => (
                <Center as="li" key={index} fontSize={"lg"}>
                  <Highlight
                    query={["Valla", "¡Vaya!", "Vaya"]}
                    styles={{
                      mx: "1",
                      p: "1",
                      bg: "white",
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
