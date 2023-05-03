import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import "./App.css";

function App() {
  const dipatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/upcoming").then((res) => {
      console.log(res);
      dipatch(getApiConfiguration(res));
    });
  };
  return <div>{url?.total_pages}</div>;
}

export default App;
