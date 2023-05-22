import React, { useEffect, useState } from "react";
import { originals, API_KEY, image } from "../../constants/constants";
import axios from "../../axios";
import "./RowPoster.css";

function RowPoster(props) {
  const [originals, setOriginals] = useState([]);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setOriginals(response.data.results);
    });
  }, []);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {originals.map((item) => (
          <img
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${image + item.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default RowPoster;
