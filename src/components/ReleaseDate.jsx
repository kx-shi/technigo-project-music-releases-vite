import React from "react";
import "../styles/ReleaseDate.css";

export const ReleaseDate = ({releaseDate}) => {
  // TODO: Link album name, Hanna
  return (
    <div className="release-date">
      <p className="bold">{releaseDate.split('-')[0]}</p>
    </div>
  );
};