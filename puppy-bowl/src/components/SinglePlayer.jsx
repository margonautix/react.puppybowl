export default function SinglePlayer({ player }) {
  return (
    <div>
      <main>
        <ul>
          <h2>{player.name}</h2>
          <h4>Breed: {player.breed}</h4>
          <h4>Status: {player.status}</h4>
          <br />
          <img src={player.imageUrl} alt={player.name} />
        </ul>
      </main>
    </div>
  );
}
