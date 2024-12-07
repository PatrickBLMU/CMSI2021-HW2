import { useState, useEffect } from "react";

import "./styles.css";
import Title from "./Title.js";
import Data from "./Data.js";
import Button from "./Button.js";

export default function App() {
  const [data, setData] = useState("");
  const [character, setCharacter] = useState("");

  function newCharacter() {
    const n = encodeURIComponent(data);
    const url = `https://rickandmortyapi.com/api/character/?page=${n}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setCharacter(r));
  }

  useEffect(newCharacter, [data]);

  return (
    <section className="App">
      <Title text="Rick and Morty Character Info" />
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_.jpg"
          alt="Picture"
          style={{ width: "500px", height: "auto" }}
        />
      </div>
      <Button action={setData} />
      <Data character={character} />
      <footer>
        By Patrick Banal |{" "}
        <a href="https://codesandbox.io/p/sandbox/hw-2-rick-and-morty-cast-sftlkd?file=%2Fsrc%2FApp.js%3A34%2C43">
          CodeSandBox:
        </a>
      </footer>
    </section>
  );
}
