import { useState } from "react";
import { handleSubmit } from "../API";

export default function NewPlayerForm() {
  // const [player, setPlayer] = useState("");
  // const [breed, setBreed] = useState("");
  // const [imgUrl, setImgUrl] = useState("");
  // useEffect(() => {
  //   async function addNewPlayer() {
  //     const response = await handleSubmit();
  //     console.log(response);
  //     setPlayer(response.player);
  //     setBreed(response.breed);
  //     setImgUrl(response.imgUrl);
  //   }
  // }, []);

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
          <input type="text" onChange={(e) => setImgUrl(e.target.value)} />
        </label>
      </form>
    </>
  );
}
