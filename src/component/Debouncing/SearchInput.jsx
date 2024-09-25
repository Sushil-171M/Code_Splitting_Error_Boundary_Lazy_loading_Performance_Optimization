import React, { useState, useEffect } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const str = setTimeout(() => {
      console.log("Here we can define Api to fetch Data");
      return 1;
    }, 2000);

    //also need to destroy the instance of the useEffect hook using return,
    //followed by clearTimeout, every time it finishes.

    return () => {
      clearTimeout(str);
    };
  }, [search]);
  return (
    <div style={{ margin: "20px", borderStyle: "inset" }}>
      <h3> Debouncing </h3>
      <input
        style={{ marginBottom: "20px" }}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
