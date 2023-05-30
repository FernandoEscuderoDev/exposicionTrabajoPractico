import {
  Box,
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
          id="a"
          key={index}
          textColor="white"
          className="section"
          textAlign={"center"}
        >
          <Flex
            as={"article"}
            bgGradient={`linear(to-b, ${dato.color})`}
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
                p: { base: 16,md: 20, xl: 28 },
                bgImage: dato.image,
                bgSize: "cover",
                left: { base: "160px", xl: "400px" },
                top: { base: "-30px", md:'-40px', xl: "-70px" },
              }}
              fontSize={{ base: "5xl", xl: "7xl" }}
            >
              {dato.titulo}
            </Heading>
            <Text
              fontSize={{ base: "md", xl: "2xl" }}
              w={"80%"}
              style={{ whiteSpace: "break-spaces" }}
            >
              {dato.contenido}
            </Text>
            <SimpleGrid
              as={"ul"}
              columns={2}
              spacing={2}
              h={"20%"}
              w={"90%"}
              textTransform={"none"}
            >
              {dato.frases.map((frase, index) => (
                <Text
                  as="li"
                  key={index}
                  listStyleType={"none"}
                  fontSize={{ base: "sm", xl: "xl" }}
                >
                  <Highlight
                    query={["Valla", "¡Vaya!", "Vaya", "Bayas", "Baya"]}
                    styles={{
                      mx: { base: "0.5", xl: "1" },
                      p: 1,
                      bg: "white",
                      fontWeight: "bold",
                      rounded: "40px",
                    }}
                  >
                    {frase}
                  </Highlight>
                </Text>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default Seccion2;
