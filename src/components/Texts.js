import React from "react";
import { useSelector } from "react-redux";
import { selectParagraphs } from "../redux/paragraphSlice";

function Texts() {
  const items = useSelector(selectParagraphs);
  const includeHTML = useSelector((state) => state.paragraphs.includeHTML);

  return (
    <div className="text">
      {items?.map((item, index) => (
        <div key={index}>
          <span>{includeHTML === "true" && "<p>"}</span>
          <span>{item}</span>
          <span>{includeHTML === "true" && "</p>"}</span>
        </div>
      ))}
    </div>
  );
}

export default Texts;
