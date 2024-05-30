import PropTypes from "prop-types";
import { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Dropdown = ({ options = [], onSelect }) => {
  // State To track option is open or not based on that we will show dropdown
  const [isOpen, setIsOpen] = useState(false);

  // State to hold the current selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // function to handle when user selects any option
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left min-w-[400px]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="bg-white border border-gray-300 rounded-md py-3 px-5 text-gray-700 flex items-center justify-between w-full"
      >
        <span className="text-xl font-semibold">
          {selectedOption ? selectedOption.label : "Select"}
        </span>
        <ChevronDownIcon className="font-bold h-7 w-7" />
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md font-semibold text-xl">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer px-4 py-2 hover:bg-blue-500 hover:text-white"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
