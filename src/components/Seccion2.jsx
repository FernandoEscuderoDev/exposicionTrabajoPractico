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
              position={'relative'}
              _before={{
                content: '" "',
                position: "absolute",
                p: {md:16,lg:28},
                bgImage:dato.image,
                bgSize:'cover',
                left: {sm:'150px',lg:'350px'},
                top:{sm:'-40px',lg:'-70px'}
              }}
              fontSize={{sm:'5xl',lg:'7xl'}}
            >
              {dato.titulo}
            </Heading>
            <Text
              fontSize={{sm:'lg',lg:'2xl'}}
              w={"80%"}
              style={{ whiteSpace: "break-spaces" }}
            >
              {dato.contenido}
            </Text>
            <SimpleGrid as={"ul"} columns={2} spacing={2} h={"20%"} w={"90%"}>
              {dato.frases.map((datos, index) => (
                <Center as="li" key={index} fontSize={{sm:'sm',lg:'lg'}}>
                  <Highlight
                    query={["Valla", "¡Vaya!", "Vaya",'Bayas','Baya']}
                    styles={{
                      mx: {lg:'1'},
                      p: {lg:'1'},
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
