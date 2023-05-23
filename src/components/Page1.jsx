import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Seccion from "./Seccion";
import Seccion2 from "./Seccion2";
import { SeccionSintesis } from "./SeccionSintesis";
import { Box } from "@chakra-ui/react";

const page1 = () => {
  return (
    <Box as="main" className="App">
      <ReactFullpage
        navigation
        render={(comp) => (
          <ReactFullpage.Wrapper>
            <Seccion />
            <Seccion2 />
            <SeccionSintesis/>
          </ReactFullpage.Wrapper>
        )}
      />
    </Box>
  );
};

export default page1;
