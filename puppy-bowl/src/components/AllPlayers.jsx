import { fetchAllPlayers } from "../API";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers({
  setPlayer,
  players,
  setPlayers,
  searchParams,
}) {
  const navigate = useNavigate();
  console.log(searchParams);

  useEffect(() => {
    async function getAllPlayers() {
      const response = await fetchAllPlayers();
      console.log("Fetching players...");
      setPlayers(response.data.players);
    }
    getAllPlayers();
  }, []);

  console.log("players: ", players);

  const playersToDisplay = searchParams
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParams)
      )
    : players;

  return (
    <>
      <div className="mainDiv">
        {playersToDisplay.map((player) => {
          return (
            <main key={player.id}>
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
              </ul>
            </main>
          );
        })}
      </div>
    </>
  );
}
