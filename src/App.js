import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import DataGrid from "./components/DataGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <SearchForm />
      <DataGrid />
      <Footer />
    </div>
  );
}

export default App;
