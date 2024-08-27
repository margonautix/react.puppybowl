import { useState } from "react";
import { createNewPlayer } from "../API";

export default function NewPlayerForm({ players, setPlayers }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const newDog = await createNewPlayer(name, breed, imageUrl);
    setPlayers([...players, newDog.data.newPlayer]);
    console.log(newDog);
  }

  return (
    <>
      <h1 className="header">New Player Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            placeholder="Input player name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Breed:{" "}
          <input
            placeholder="Input player breed"
            type="text"
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>

        <label>
          Image URL:{" "}
          <input
            placeholder="Input player image URL"
            type="text"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
