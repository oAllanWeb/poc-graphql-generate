import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useCharactersQuery } from "./queries/autogenerate/hooks";

function App() {
  const { loading, data, error } = useCharactersQuery({
    variables: { id: "1" },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="App">
      <ul>
        {data?.episode?.characters.map((character) => (
          <li>{character?.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
