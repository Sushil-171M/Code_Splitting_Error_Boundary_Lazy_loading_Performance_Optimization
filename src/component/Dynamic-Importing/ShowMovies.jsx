import React, { useState } from "react";

const ShowMovies = () => {
  const [Movies, setMovies] = useState([]);

  //Dynamic Importing
  const clickHandler = async () => {
    //if MovieList is Named export then it will return a
    // module with MovieList object

    // using promises

    // import("./MoviesList").then((module) => {
    //   setMovies(module.MoviesList);
    // });

    // using async await and default export of MovielISt
    const Module = await import("../../util/MoviesList");
    setMovies(Module.default);
  };

  return (
    <div>
      <h3>List of Movies (Using Dynamic Import (Code Splitting)) </h3>
      <button onClick={clickHandler}>Get Movies </button>
      {Movies.map((movie, index) => (
        <h3 key={index}> {JSON.stringify(movie)} </h3>
      ))}
    </div>
  );
};

export default ShowMovies;
