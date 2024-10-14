import React from "react";
import Pokeheader from "../pokedox/pokeheader";
import Search from "../search/Search";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <section className="col-12 d-flex header px-1 me-3 flex-lg-row flex-column  ">
      <div className=" d-flex col-2 justify-content-center align-items-center border border-success mx-auto my-2">
        <Link to={"/"} className="text-dark">
          <img src="./download.png" className="lodo-img" alt="" />
        </Link>
      </div>

      <div className=" col-10   ">
        <Search />
      </div>
    </section>
  );
}

export default Header;
