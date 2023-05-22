import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, image } from "../../constants/constants";
import axios from "../../axios";

function Banner() {
  const [item, setItem] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        let index = Math.floor(Math.random() * response.data.results.length);
        setItem(response.data.results[index]);
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${item ? image + item.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{item ? item.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{item ? item.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
