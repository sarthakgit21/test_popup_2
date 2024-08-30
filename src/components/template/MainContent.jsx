import { useState } from "react";
import "../../app.css";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";

const MainContent = () => {
  const [selectedBlock, setSelectedBlock] = useState("Feature1");

  const handleBlockClick = (block) => {
    setSelectedBlock(block);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="block" onClick={() => handleBlockClick("Feature1")}>
          Feature1
        </div>
        <div className="block" onClick={() => handleBlockClick("Feature2")}>
          Feature2
        </div>
        <div className="block" onClick={() => handleBlockClick("Feature3")}>
          Feature3
        </div>
      </div>
      <div className="right-panel">
        {selectedBlock === "Feature1" && <Feature1 />}
        {selectedBlock === "Feature2" && <Feature2 />}
        {selectedBlock === "Feature3" && <Feature3 />}
      </div>
    </div>
  );
};

export default MainContent;
