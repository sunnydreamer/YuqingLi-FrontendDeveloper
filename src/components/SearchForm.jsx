import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../state/searchActions";
import { setSearchData } from "../state/searchSlices";

const SearchBar = () => {
  const [filterType, setFilterType] = useState("capsule_serial");
  const [filterValue, setFilterValue] = useState("");
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.searchData);

  const [filterDate, setFilterDate] = useState(""); // Use separate state for date
  const [filterTime, setFilterTime] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (filterType === "original_launch") {
      const combinedTime = combineDateAndTime(filterDate, filterTime);
      // console.log(combinedTime);
      if (combinedTime) setFilterValue(combinedTime);
    }

    if (filterValue === "") {
      console.log("please enter something");
      return; // Prevent form submission if filter value is empty for type filter
    }

    console.log(filterType, filterValue);
    const results = await dispatch(fetchData({ filterType, filterValue }));
    dispatch(setSearchData(results.payload));
  };

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
    setFilterValue("");
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setFilterDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setFilterTime(e.target.value);
  };

  const combineDateAndTime = (date, time) => {
    if (date === "" || time === "") return;
    const [hours, minutes] = time.split(":");
    const combinedDate = new Date(date);
    combinedDate.setUTCHours(hours);
    combinedDate.setUTCMinutes(minutes);
    return combinedDate.toISOString();
  };

  const renderFilterOptions = () => {
    if (filterType === "status") {
      return (
        <select
          value={filterValue}
          onChange={handleFilterValueChange}
          className="border-b-2 border-gray-300 w-40 text-left"
        >
          <option>Select</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
          <option value="unknown">Unknown</option>
          <option value="destroyed">Destroyed</option>
        </select>
      );
    } else if (filterType === "type") {
      return (
        <select
          value={filterValue}
          onChange={handleFilterValueChange}
          className="border-b-2 border-gray-300 w-40 text-left"
        >
          <option>Select</option>
          <option value="Dragon 1.0">Dragon 1.0</option>
          <option value="Dragon 1.1">Dragon 1.1</option>
          <option value="Dragon 2.0">Dragon 2.0</option>
        </select>
      );
    } else if (filterType === "capsule_serial") {
      return (
        <input
          type="text"
          value={filterValue}
          placeholder="Type here"
          onChange={handleFilterValueChange}
          className="border-b-2 border-gray-300 w-40 text-left"
        />
      );
    } else if (filterType === "original_launch") {
      return (
        <>
          <input
            type="date"
            value={filterDate}
            onChange={handleDateChange}
            className="border-b-2 border-gray-300 w-40 text-left"
          />
          <input
            type="time"
            value={filterTime}
            onChange={handleTimeChange}
            className="border-b-2 border-gray-300 w-40 text-left"
          />
        </>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    setFilterValue(""); // Reset the filter value when the filter type changes
  }, [filterType]);

  return (
    <div className="h-400 flex flex-col items-center justify-center p-20">
      <h1 className="text-5xl font-bold mb-10">Search</h1>
      <form
        onSubmit={handleSearch}
        className="ml-4 flex flex-col justify-center items-center w-4/5 gap-10"
      >
        <select
          value={filterType}
          onChange={handleFilterTypeChange}
          className="mr-2 border-b-2 border-gray-300 w-40 text-left"
        >
          <option value="capsule_serial">Capsule Serial</option>
          <option value="status">Status</option>
          <option value="original_launch">Original Launch</option>
          <option value="type">Type</option>
        </select>
        {renderFilterOptions()}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
