import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState([]);
  const [searchParams, setSearchParams] = useState("");

  return (
    <>
      <div id="newForm">
        <NewPlayerForm players={players} setPlayers={setPlayers} />
      </div>
      <div id="navbar">
        <NavBar searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>
      <div id="main-section">
        <Routes>
          <Route
            path="/"
            element={
              <AllPlayers
                setPlayer={setPlayer}
                players={players}
                setPlayers={setPlayers}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
            }
          />
          <Route
            path="/players/:id"
            element={<SinglePlayer player={player} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
