import React, { useState } from "react";
import Header from "./Header";
import Books from "./Books";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div>
      <Header />
      <Books /> 
      <SearchBar />
    </div>
  );
}

export default App;