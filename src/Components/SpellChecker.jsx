import React, { useState } from "react";
import "../CSS/styles.css";

const customDictionary = {

    teh: "the",
  
    wrok: "work",
  
    fot: "for",
  
    exampl: "example"
  
};

let SpellChecker = () => {
  let [inputText, setInputText] = useState("");
  let [suggestedText, setSuggestedText] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setInputText(inputValue);
    setSuggestedText("");
    let words = inputValue.toLowerCase().split(" ");
    for (let word of words) {
      if (customDictionary[word]) {
        setSuggestedText(customDictionary[word]);
        break;
      }
    }
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        rows="4"
        cols="50"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
      ></textarea>
      {suggestedText && (
        <p>
          Did you mean:{" "}
          <strong>
            {suggestedText.charAt(0).toLowerCase() + suggestedText.slice(1)}
          </strong>
          ?
        </p>
      )}
    </div>
  );
};

export default SpellChecker;

