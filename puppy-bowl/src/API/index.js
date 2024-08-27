const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT";

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${API_URL}/players`);
    const json = await response.json();
    return json;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
}

// export async function removePlayer(playerId) {
//   try {
//     // TODO
//     const response = await fetch(`${API_URL}/players/${playerId}`, {
//       method: "DELETE",
//     });
//     const json = await response.json();
//     return json;
//   } catch (err) {
//     console.error(
//       `Whoops, trouble removing player #${playerId} from the roster!`,
//       err
//     );
//   }
// }

// export async function handleSubmit(name, breed, imageUrl) {
//   try {
//     const response = await fetch(`${API_URL}/players`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name,
//         breed,
//         imageUrl,
//       }),
//     });
//     const json = await response.json();
//     init();
//     console.log(json);
//   } catch (err) {
//     console.error("Oops, something went wrong with adding that player!", err);
//   }
// }
