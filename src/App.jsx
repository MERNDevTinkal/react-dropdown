import { useState } from "react";
import "./App.css";
import { Header, Dropdown } from "./Components";
import { DROP_DOWN_OPTIONS } from "./constants"; // dropdown options

function App() {
  // State to store selected option
  const [selectedOption, setSelectedOption] = useState("");

  // function which will be called by dropdown component to lift up the selected option value
  const handleSelectDropdown = (value) => {
    setSelectedOption(value);
    console.log("Current Selected Option", value);
    console.log("Previous Selected Option", selectedOption);
  };

  return (
    <div className="w-full h-screen bg-sky-300 font-mono">
      <Header />
      <div className="w-full flex items-center flex-col mt-10">
        <div>
          <h1 className="text-3xl font-bold my-3">
            Should you use a dropdown?
          </h1>
          <Dropdown
            options={DROP_DOWN_OPTIONS}
            onSelect={handleSelectDropdown}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
