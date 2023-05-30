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
        window.navigator.vibrate([200, 100, 200, 100,200, 100, 200, 100, 400, 100,300]);
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
          fontSize={{ base: "4xl", xl: "7xl" }}
          ref={ref}
        >
          Integrantes
        </Heading>

        <VStack gap={{ xl: 4 }}>
          <Heading fontSize={{ base: "xl", xl: "4xl" }}>Juliana Verna</Heading>
          <Heading
            position={"relative"}
            _before={{
              content: '" "',
              position: "absolute",
              p: { base: 14, xl: 24 },
              bgImage:
                "https://media.tenor.com/HLrXIleGBToAAAAi/transparent-cat.gif",
              bgSize: "cover",
              right: { base: "250px", xl: "450px" },
              top: { base: "-30px", xl: "-70px" },
            }}
            _after={{
              content: '" "',
              position: "absolute",
              transform:'scaleX(-1)',
              p: { base: 14, xl: 24 },
              bgImage:
                "https://media.tenor.com/HLrXIleGBToAAAAi/transparent-cat.gif",
              bgSize: "cover",
              left: { base: "250px", xl: "450px" },
              top: { base: "-30px", xl: "-70px" },
            }}
            fontSize={{ base: "xl", xl: "4xl" }}
          >
            Fernando Escudero
          </Heading>
          <Heading fontSize={{ base: "xl", xl: "4xl" }}>Mauro Gonzalez</Heading>
          <Heading fontSize={{ base: "xl", xl: "4xl" }}>Lucas Perez</Heading>
        </VStack>

        <Heading
          as="h3"
          textShadow={"0px 4px #000"}
          fontSize={{ base: "xl", xl: "4xl" }}
        >
          Gracias por prestar atencion
        </Heading>
      </VStack>
    </Box>
  );
};
