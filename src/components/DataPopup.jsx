import React from "react";

function DataPopup({ popupText, setShowPopup }) {
  const handleCloseClick = () => {
    setShowPopup(false);
  };

  const popupList = popupText
    ? popupText.map((element, i) => {
        return (
          <div key={i}>
            <p>
              <b>{element[0]}: </b>
              {element[1]}
            </p>
          </div>
        );
      })
    : [];

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-10">
      <div className="bg-white rounded p-10 flex flex-col max-w-md">
        {popupList}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleCloseClick}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default DataPopup;
