import React, { useEffect, useState } from "react";
import { API_KEY, image } from "../../constants/constants";
import axios from "../../axios";
import Youtube from "react-youtube";
import "./RowPoster.css";

function RowPoster(props) {
  const [originals, setOriginals] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setOriginals(response.data.results);
    });
  });

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const videohandler = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
            setId(response.data.results[0])
        }else{
            console.log("error");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {originals.map((item) => (
          <img
            onClick={() => videohandler(item.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${image + item.backdrop_path}`}
          />
        ))}
      </div>
     {id &&  <Youtube opts={opts} videoId={id.key} />}
    </div>
  );
}

export default RowPoster;
