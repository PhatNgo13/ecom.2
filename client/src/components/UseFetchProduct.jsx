import React, { useEffect, useState } from "react";
import axios from "axios";
import Albums from "./Albums";
import Filter from "./Filter";

//CUSTOM HOOK TO FETCH MYSQL DATA
const UseFetchProduct = () => {
  const [albums, setAlbums] = useState([]);
  //FILTERED AND ACTIVE STATES TO STORE CHANGES WITHIN STATES
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState("");

  //MUST USE AN ASYNC FUNCTION TO MAKE A CALL TO API
  useEffect(() => {
    const fetchAllalbums = async () => {
      try {
        const res = await axios.get("http://localhost:4000/all/albums");
        console.log(res);
        setAlbums(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllalbums();
    //DEPENDENCIES, ONLY RUN ONCE
  }, []);

  //SET RETURN ANOTHER COMPONENT TO DISPLAY THE ALBUMS
  //USE MAP TO MAP ALBUM FROM DATABASE TO THE FRONT END
  //CALLING FILTER COMPONENT
  //SET FILTERED VARIABLE TO MAP ONLY THE FILTERED ALBUMS
  return (
    <div className="container py-5 my-5">
      <Filter
        albums={albums}
        setFiltered={setFiltered}
        active={active}
        setActive={setActive}
      />
      <div className="all-albums">
        {filtered.map((album) => {
          return <Albums key={album.id} album={album} />;
        })}
      </div>
    </div>
  );
};

export default UseFetchProduct;
