import React from "react";

const Albums = ({ album }) => {
  return (
    <div>
      <div className="card my-3 p-5 border-0">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={album.albumCover}
              className="card-img img-fluid "
              alt="album cover"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body my-5">
              <h2 className="card-title pb-3">
                {album.albumName} -{" "}
                <small className="text-muted"> {album.albumArtist}</small>
              </h2>
              <p className="card-text">{album.albumDesc}</p>
              <p className="card-text">
                ${album.albumPrice} -
                <small className="text-muted"> {album.albumGenre}</small>
              </p>
              <button className="btn " type="submit">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;
