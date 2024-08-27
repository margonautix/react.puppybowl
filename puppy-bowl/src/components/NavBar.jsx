import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="search">
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="Search for player"
            onChange={(e) =>
              setSearchParams(e.target.value.toLocaleLowerCase())
            }
          ></input>
        </label>
      </div>
      <div>
        <Link to="/">Show All Players</Link>
      </div>{" "}
      <br />
    </>
  );
}

export default NavBar;
