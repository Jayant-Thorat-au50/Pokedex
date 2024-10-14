import "./PokemonsDetails.css";
import Loader from "../Loader";
import UseSinglePoke from "../../hooks/useSinglePoke";
import PageNotFound from "../pageNotFound";
import { Link, useParams } from "react-router-dom";

function PokemonsDetails() {
  const { name } = useParams();
  const [pokemon, isLoading, doNotExists] = UseSinglePoke(name);

  return (
    <>
      {doNotExists ? (
        <PageNotFound message={"something went wrong"} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className=" mx-auto  col-8 d-flex justify-content-center flex-column  align-items-center  my-5 Loader  ">
          <div className="col-12 my-3 d-flex flex-lg-row flex-column align-items-center details-wrapper">
            <div className="col-7 py-lg-4  d-flex justify-content-center align-items-center flex-column ">
              <h2>{pokemon.name}</h2>
              <img src={pokemon.img} className="pokebg-single p-2" alt="" />
            </div>
            <div className="d-flex justify-content-center  col-5 align-items-center flex-column">
              <div className="d-flex align-items-start flex-column">
                <span className="d-flex">
                  <p className="h4">height :</p> &nbsp;{" "}
                  <p className="h4">{pokemon.height}</p>
                </span>
                <span className="d-flex">
                  <p className="h4">weight :</p> &nbsp;{" "}
                  <p className="h4">{pokemon.weight}</p>
                </span>
                <span className="d-flex justify-content-center">
                  <p className="h4">type :</p> &nbsp;{" "}
                  <div className="d-flex h4 gap-2">
                    {pokemon.type.map((ele, index) => {
                      return <p key={index}>{ele}</p>;
                    })}
                  </div>
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 my-lg-3 p-2 ">
            <div className="text-dark h3 d-flex gap-1">
              Other {pokemon.similarTypePokemons.length} &nbsp;{" "}
              {pokemon.type.map((ele, index) => {
                return <p key={index}>{ele}</p>;
              })}
              &nbsp; related pokemons
            </div>
            <ul className="d-flex justify-content-center align-items-center flex-wrap">
              {pokemon.similarTypePokemons.map((p, index) => {
                return (
                  <Link
                    to={`/pokemon/${p.pokemon.name}`}
                    key={p.pokemon.name}
                    className="text-dark col-3 d-flex justify-content-start align-items-center flex-wrap"
                  >
                    <li className=" types-element">{p.pokemon.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
export default PokemonsDetails;
