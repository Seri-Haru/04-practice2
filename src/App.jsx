import React, { useState } from 'react'; 

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [customName, setCustomName] = useState("");
  const [ukus, setUkus] = useState("us"); // 状態管理を追加
  const weightInPounds = 300;
  const temperatureInFahrenheit = 94;

  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  function generateStory() {
    const xOptions = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yOptions = ["the soup kitchen", "Disneyland", "the White House"];
    const zOptions = [
      "spontaneously combusted",
      "melted into a puddle on the sidewalk",
      "turned into a slug and crawled away"
    ];

    setXItem(randomValueFromArray(xOptions));
    setYItem(randomValueFromArray(yOptions));
    setZItem(randomValueFromArray(zOptions));
    setShowStory(true);
  }

  function handleNameChange(event) {
    setCustomName(event.target.value);
  }

  function handleUkUsChange(event) {
    setUkus(event.target.value);
  }

  // 重さと温度の単位変換
  const weight = ukus === "uk" ? (weightInPounds / 14).toFixed(1) + " stone" : weightInPounds + " pounds";
  const temperature = ukus === "uk" ? ((temperatureInFahrenheit - 32) * 5 / 9).toFixed(1) + " centigrade" : temperatureInFahrenheit + " fahrenheit";

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input
          type="text"
          placeholder=""
          value={customName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          value="us"
          checked={ukus === "us"}
          onChange={handleUkUsChange}
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          value="uk"
          checked={ukus === "uk"}
          onChange={handleUkUsChange}
        />
      </div>
      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {temperature} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {customName || "Bob"} saw the whole thing, but was not surprised —
          {xItem} weighs {weight}, and it was a hot day.
        </p>
      )}
    </>
  );
}
