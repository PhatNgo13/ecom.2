import React from "react";
import { useEffect } from "react";

//FILTER COMPONENT CALLING STATES FROM HOOK
const Filter = ({ setActive, active, setFiltered, albums }) => {
  useEffect(() => {
    if (active === "*") {
      setFiltered(albums);
      return;
    }
    //SET FILTERED TO FILTER ALBUM GENRE THAT INCLUDES THE ACTIVE STATE
    const filtered = albums.filter((album) =>
      album.albumGenre.includes(active)
    );
    //SET FILTERED STATE TO FILTERED
    setFiltered(filtered);
    //DEPENDENCY IS ACTIVE SO THE FILTER RUN EVERY THE ACTIVE STATE CHANGES.
  }, [active]);

  //BUTTON WITH THE ONCLICK EVENT TO CHANGE THE ACTIVE STATE TO WHICH EVER GENRE YOU WANT TO FILTER.
  return (
    <div className="filter-container pt-5 d-flex justify-content-center">
      <button className="btn px-2 mx-2" onClick={() => setActive("*")}>
        All
      </button>
      <button className="btn px-2 mx-2" onClick={() => setActive("R&B/Soul")}>
        R&B/Soul
      </button>
      <button className="btn px-2 mx-2" onClick={() => setActive("Pop")}>
        Pop
      </button>
      <button
        className="btn px-2 mx-2"
        onClick={() => setActive("Hip-Hop/Rap")}
      >
        Rap
      </button>
      <button
        className="btn px-2 mx-2"
        onClick={() => setActive("Alternative")}
      >
        Alternative
      </button>
    </div>
  );
};

export default Filter;
