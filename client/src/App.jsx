import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/searchbar";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(res.data);
    } catch (err) {
      setError("City not found or network error");
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <>
    <div className="container w-full mt-2 mb-5">
      <div className="flex justify-end gap-50 ">
        <h1 className= "text-4xl font-bold">
          Weather Dashboard
        </h1>
        <SearchBar onSearch={fetchWeather} />
      </div>
    </div>
    <hr />

    <div className="main w-full mt-20 flex justify-center align-center">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      {weather && <WeatherCard data={weather} />}
    </div>
   </>
  );
}

export default App;
