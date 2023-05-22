import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Seccion from "./Seccion";
const originalColors = ["#0798ec", "#fc6c7c", "#435b71"];

const page1 = () => {
  return (
    <div className="App">
      <ReactFullpage
        navigation
        // scrollHorizontally = {true}
        sectionsColor={originalColors.map((a) => a)}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            <Seccion />
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default page1;
