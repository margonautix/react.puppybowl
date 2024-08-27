import { removePlayer } from "../API";
import { useNavigate } from "react-router-dom";

export default function SinglePlayer({ player }) {
  const navigate = useNavigate();
  return (
    <div>
      <main>
        <ul>
          <h2>{player.name}</h2>
          <h4>Breed: {player.breed}</h4>
          <h4>Status: {player.status}</h4>
          <br />
          <img src={player.imageUrl} alt={player.name} />
          <br />
          <button
            onClick={() => {
              removePlayer(player.id);
              // alert("Player removed. Return to all players.");
              navigate("/");
            }}
            className="deleteButton"
          >
            Delete Player
          </button>
        </ul>
      </main>
    </div>
  );
}
