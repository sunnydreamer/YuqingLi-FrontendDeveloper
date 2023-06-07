import React, { useState, useEffect } from "react";
import { Provider } from 'react-redux';
import store from './state/store';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import DataGrid from "./components/DataGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Banner />
        <SearchForm />
        <DataGrid />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
