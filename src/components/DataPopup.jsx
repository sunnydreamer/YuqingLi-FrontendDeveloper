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
              <strong>{element[0]}: </strong>
              {element[1]}
            </p>
          </div>
        );
      })
    : [];

  return (
    <div className="data-popup-overlay fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-10">
      <div
        className=" data-popup-container bg-white rounded p-10 flex flex-col max-w-md"
        data-testid="data-popup-container"
      >
        {popupList}
        <button
          className="data-popup-close-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleCloseClick}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default DataPopup;
