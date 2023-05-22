import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Seccion from "./Seccion";
import Seccion2 from "./Seccion2";

const page1 = () => {
  return (
    <div className="App">
      <ReactFullpage
        navigation
        render={(comp) => (
          <ReactFullpage.Wrapper>
            <Seccion />
            <Seccion2 />
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default page1;
