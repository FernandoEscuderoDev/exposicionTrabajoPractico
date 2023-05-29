import { Box, Heading, VStack, useToken } from "@chakra-ui/react";
import JSConfetti from "js-confetti";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion"

export const Integrantes = () => {
  const [yellow500, yellow700] = useToken("colors", ["cyan.700", "cyan.800"]);
  const ref = useRef(null)
  const isInView  = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const jsConfetti = new JSConfetti();
      const confettisActivado = setTimeout(() => {
        jsConfetti.addConfetti({
          confettiNumber: 200,
          emojiSize:50
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
        <Heading ref={ref} as="h2" textShadow={"0px 4px #000"} fontSize={"7xl"}>
          Integrantes
        </Heading>

        <VStack gap={4}>
          <Heading>Juliana Verna</Heading>
          <Heading>Fernando Escudero</Heading>
          <Heading>Mauro Gonzalez</Heading>
          <Heading>Lucas Perez</Heading>
        </VStack>

        <Heading as="h3" textShadow={"0px 4px #000"} fontSize={"3xl"}>
          Gracias por prestar atencion
        </Heading>
      </VStack>
    </Box>
  );
};
