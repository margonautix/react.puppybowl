import { fetchAllPlayers } from "../API";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers({ setPlayer }) {
  const [players, setPlayers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const navigate = useNavigate();
  console.log(searchParams);

  useEffect(() => {
    async function getAllPlayers() {
      const response = await fetchAllPlayers();
      console.log(response);
      setPlayers(response.data.players);
    }
    getAllPlayers();
  }, []);

  console.log("players: ", players);

  const playersToDisplay = searchParams
    ? players.filter((player) => player.name.includes(searchParams))
    : players;

  return (
    <>
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="Search"
            onChange={(e) =>
              setSearchParams(e.target.value.toLocaleLowerCase())
            }
          ></input>
        </label>
      </div>

      <div>
        {playersToDisplay.map((player) => {
          return (
            <main>
              <ul>
                <h2>{player.name}</h2>
                <p>#{player.id}</p>
                <br />
                <img src={player.imageUrl} alt={player.name} />
                <br />
                <button
                  onClick={() => {
                    setPlayer(player);
                    navigate(`/players/${player.id}`);
                  }}
                  className="detailsButton"
                >
                  See Details
                </button>
                <button className="deleteButton">Delete Player</button>
              </ul>
            </main>
          );
        })}
      </div>
    </>
  );
}
