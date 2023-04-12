import { useState } from "react";

import SnakeStyleBtn from "../components/buttonUI/SnakeBorderButton";
import SimpleDropDown from "../components/dropDown/SimpleDropDown";
import { data } from "../data";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Human: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      typeText(data.result);
      setAnimalInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
  function typeText(text) {
    let i = 0;
    const typingInterval = setInterval(() => {
      setResult((prev) => (prev += text.charAt(i)));
      i++;
      if (i === text.length) {
        clearInterval(typingInterval);
      }
    }, 100);
  }

  return (
    <div className="flex w-full h-full ">
      <div className="w-full h-full flex-col justify-between   ">
        <div className="w-full flex  space-x-2 h-auto mb-4 ">
          <SimpleDropDown
            value={value}
            handleChange={handleChange}
            label="Select a sample input"
            classStyle="bg-white"
            data={data ?? []}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="w-1/2 ">Input Box</h1>
          <h1 className="w-1/2 ">Input Box</h1>
        </div>
        <div className="w-full flex justify-between items-center h-3/4 ">
          <div className="w-[49%] h-full rounded-2xl border-gray-600 bg-[rgba(0,0,0,0.5)]"></div>
          <div className="w-[49%] h-full rounded-2xl border-gray-600 bg-[rgba(0,0,0,0.5)]"></div>
        </div>
        <div className="w-full h-auto flex justify-center items-end py-5">
          <div className="flex w-full justify-between items-center bg-white p-1  rounded-2xl">
            <input
              type="text"
              name="animal"
              placeholder="Enter an animal"
              value={animalInput}
              className="w-full h-full py-2  bg-white px-10"
              onChange={(e) => setAnimalInput(e.target.value)}
            />
            <SnakeStyleBtn title="Send" onPress={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>AI:{result}</div>
      </main> */
}
