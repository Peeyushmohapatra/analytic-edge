import React, { useState } from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Searchbar = () => {
  const navigate = useNavigate();

  const [seatchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  return (
    <div className="searchBar">
      <input
        placeholder="Search Here"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        type="text"
        value={seatchInput}
      />
      <button
        onClick={() => {
            if(seatchInput === ""){
                alert("Input Should Not Be Emplty !!")
                navigate("/");
                return
            }
          dispatch({
            type: "search-input",
            data: seatchInput,
          });
          navigate("/search");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
