import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const data = useFetch("/movie/upcoming");
  // console.log(data?.data?.results);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

    console.log(bg);
    setBackground(bg);
    console.log(background);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length != 0) {
      navigate(`/serch/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      <div className="backdrop-img"></div>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title"></span>
          <span className="subTitle">
            Millions of movies, TV whows and people to discover. Explor now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for move or tv show ..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
