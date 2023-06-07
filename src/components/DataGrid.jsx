import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import DataPopup from "./DataPopup";

function DataGrid() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState([]);

  const searchData = useSelector((state) => state.search.searchData);
  console.log(searchData);

  const handleViewClick = (text) => {
    setPopupText(text);
    setShowPopup(true);
  };

  const dataList = searchData
    ? searchData.map((element) => {
        return (
          <tr
            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
            key={`${element.capsule_serial}`}
          >
            <td className="whitespace-nowrap px-6 py-4 font-medium">
              {element.capsule_serial}
            </td>
            <td className="whitespace-nowrap px-6 py-4"> {element.status}</td>
            <td className="whitespace-nowrap px-6 py-4">
              {element.original_launch}
            </td>
            <td className="whitespace-nowrap px-6 py-4"> {element.type}</td>
            <td className="whitespace-nowrap px-6 py-4">
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() =>
                  handleViewClick([
                    ["Capsule Serial", element.capsule_serial],
                    ["Capsule ID", element.capsule_id],
                    ["status", element.status],
                    ["original_launch", element.original_launch],
                    ["landings", element.landings],
                    ["type", element.type],
                    ["details", element.details],
                    ["reuse_count", element.reuse_count],
                  ])
                }
              >
                View
              </button>
            </td>
          </tr>
        );
      })
    : [];

  return (
    <div className="flex flex-col">
      {searchData && (
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 px-32">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Capsule Serial
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Original Launch
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-4">
                      More Info
                    </th>
                  </tr>
                </thead>
                <tbody>{dataList}</tbody>
              </table>
            </div>
          </div>
          {showPopup && (
            <DataPopup popupText={popupText} setShowPopup={setShowPopup} />
          )}
        </div>
      )}
    </div>
  );
}

export default DataGrid;
