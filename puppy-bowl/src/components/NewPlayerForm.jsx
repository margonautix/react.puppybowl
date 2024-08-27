import { useState } from "react";
import { createNewPlayer } from "../API";

export default function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const newDog = await createNewPlayer(name, breed, imageUrl);
    console.log(newDog);
  }

  return (
    <>
      <h1 className="header">New Player Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Breed:{" "}
          <input type="text" onChange={(e) => setBreed(e.target.value)} />
        </label>

        <label>
          Image URL:{" "}
          <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
