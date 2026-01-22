import React, { useState, useEffect, useRef } from "react";
import EditForm from "./EditForm"; 

const Card = ({ deleteArray, userArray, setUserArray }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
     
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="bg-pink-100 p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs">
        <div className="self-end relative" ref={dropdownRef}>
          <button
            id="dropdownMenuIconButton"
            onClick={toggleDropdown}
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-pink-100 rounded-lg hover:bg-pink-200 focus:ring-4 focus:outline-none focus:ring-pink-200"
            type="button"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 4"
            >
              <path d="M3 2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    className="block px-4 py-2 hover:bg-gray-100 text-red-500 w-full text-left"
                    onClick={() => deleteArray(userArray.id)}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* User Info */}
        <img
          src={userArray?.display_name}
          alt="Display Name"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mt-4 mb-4 sm:mt-6 sm:mb-6 border-4 border-white shadow-md object-cover"
        />
        <h2 className="text-lg font-bold text-gray-800 text-center">
          {userArray?.first_name} {userArray?.last_name}
        </h2>
        <p className="text-sm text-gray-600 text-center">{userArray?.email}</p>
        <p className="text-sm text-gray-600 text-center">{userArray?.gender}</p>
      </div>

      {/* Modal for EditForm */}
      {isModalOpen && <EditForm onClose={() => setIsModalOpen(false)} data={userArray} setData={setUserArray} type={"edit"} />}
    </div>
  );
};

export default Card;
