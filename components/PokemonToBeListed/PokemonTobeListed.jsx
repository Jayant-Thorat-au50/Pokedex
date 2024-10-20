import React from "react";
import './PokemonToBeListed.css'
import { Link } from "react-router-dom";

function PokemonTobeListed({ name, image, id }) {
  return (
    <div className="d-flex justify-content-center    align-items-center flex-column text-dark my-lg-4 my-2">
      <Link to={`pokemon/${name}`} className="text-dark">
        <div className="d-flex justify-content-center py-2 pokebg align-items-center flex-column gap-1">
          <h4>{name}</h4>
          <img src={image} className="m-0 pokemon" id={id} />
          {/* <h4 className="text-dark">{type.map(t => t.name)}</h4> */}
        </div>
      </Link>
    </div>
  );
}

export default PokemonTobeListed;
