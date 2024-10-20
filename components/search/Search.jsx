import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

function Search() {

const [searchState,setSearchState] = useState({
     input:''
})
  
  return (
    <>
      <div className="  col-lg-12 col-8 py-3      ">
        <div className="pokemon-name-search d-flex gap-2 mx-auto  col-6  ">
          <input
            type="text"
            placeholder="Pokemon name....."
            className="bg-white  px-2 border  text-dark fw-bold fs-5  "
            value={searchState.input}
            onChange={(e)=> setSearchState({...searchState,input:e.target.value})}
          />
          <div className="border border-1 border-dark d-flex justify-content-center align-items-center">
        <Link to={`pokemon/${searchState.input}`}>
        
        <button className="btn"
          onClick={()=> setSearchState(
       {     ...searchState,
            input:'' }
          )}
          >
              Search
          </button>
        
        </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
