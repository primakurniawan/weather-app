import React, { useState } from "react";
import "./SearchLocation.css";
const SearchLocation = ({ changeLocation }) => {
  const [location, setLocation] = useState("");
  const onChange = (e) => {
    setLocation(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (location.trim() !== "") {
      changeLocation(location);
      setLocation("");
    }
  };
  return (
    <div className="searchLocation">
      <form onSubmit={onSubmit}>
        <input
          name="location"
          value={location}
          placeholder="search the city here"
          onChange={onChange}
          className="searchLocation__input"
        />
        <input
          type="submit"
          value="search"
          className="searchLocation__button"
        />
      </form>
    </div>
  );
};

export default SearchLocation;
