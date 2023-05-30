import { Box, Heading, VStack, useToken } from "@chakra-ui/react";
import JSConfetti from "js-confetti";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export const Integrantes = () => {
  const [yellow500, yellow700] = useToken("colors", ["cyan.700", "cyan.800"]);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const jsConfetti = new JSConfetti();
      const confettisActivado = setTimeout(() => {
        jsConfetti.addConfetti({
          confettiNumber: 300,
          emojiSize: 50,
        });
      }, 500);
      return () => clearTimeout(confettisActivado);
    }
  }, [isInView]);

  return (
    <Box
      as="section"
      textColor="white"
      className="section"
      textAlign={"center"}
    >
      <VStack
        as={"article"}
        bgGradient={`linear(to-t, ${yellow500}, ${yellow700})`}
        justifyContent={"space-evenly"}
        align={"center"}
        h={"100vh"}
        flexDir={"column"}
        textTransform={"uppercase"}
      >
        <Heading
          as="h2"
          textShadow={"0px 4px #000"}
          fontSize={{ base: "4xl", lg: "7xl" }}
          ref={ref}
        >
          Integrantes
        </Heading>

        <VStack gap={{ lg: 4 }}>
          <Heading fontSize={{ base: "xl", lg: "4xl" }}>Juliana Verna</Heading>
          <Heading fontSize={{ base: "xl", lg: "4xl" }}>
            Fernando Escudero
          </Heading>
          <Heading fontSize={{ base: "xl", lg: "4xl" }}>Mauro Gonzalez</Heading>
          <Heading fontSize={{ base: "xl", lg: "4xl" }}>Lucas Perez</Heading>
        </VStack>

        <Heading
          as="h3"
          textShadow={"0px 4px #000"}
          fontSize={{ base: "xl", lg: "4xl" }}
        >
          Gracias por prestar atencion
        </Heading>
      </VStack>
    </Box>
  );
};
