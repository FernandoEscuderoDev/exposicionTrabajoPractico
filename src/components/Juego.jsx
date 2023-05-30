import { Box, Flex } from "@chakra-ui/react";

export const Juego = () => {
  return (
    <Box w={"100%"} className="section">
      <Flex justifyContent={"center"}
          bgColor={"teal.500"} alignItems={"center"}>
        <Box
          position={"relative"}
          paddingTop={"0"}
          w={'90%'}
          h={"100vh"}
        >
          <Box
            as="iframe"
            title="'Valla, Vaya, Baya'"
            frameborder="0"
            width="100%"
            height="100%"
            margin={'auto'}
            position={"absolute"}
            top={0}
            left={0}
            src="https://view.genial.ly/647629774b8e7900125d4a65"
            type="text/html"
            allowscriptaccess="always"
            allowfullscreen="true"
            scrolling="yes"
            allownetworking="all"
          />
        </Box>
      </Flex>
    </Box>
  );
};
