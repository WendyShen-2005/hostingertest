import { useState } from "react";
import "./App.css";

const URL_START = import.meta.env.VITE_URL_START;

function App() {
  const [output, setOutput] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch(`${URL_START}/cats`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.text();

      setOutput((prev) => (prev ? `${prev}<br/>${data}` : data));
    } catch (error) {
      setOutput(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  };

  return (
    <>
      <header>
        <h1>🐾 Meow &amp; Co. 🐾</h1>
        <p>The pinkest corner of the cat internet</p>
      </header>

      <main className="container">
        <section className="welcome-card">
          <h2>Welcome, Human!</h2>
          <p>
            Hi there! This is a magical place dedicated to all things fluffy,
            pink, and feline. Take a look around and enjoy the pure cuteness.
          </p>

          <button
            className="cute-btn"
            onClick={handleClick}
          >
            Click for Purrs
          </button>

          <div
            id="output"
            dangerouslySetInnerHTML={{ __html: output }}
          />
        </section>

        <section className="gallery">
          <div className="cat-card">
            <div className="cat-emoji">🐱</div>
            <h3>Mochi</h3>
            <p>Loves strawberry milk and afternoon naps in the sun.</p>
          </div>

          <div className="cat-card">
            <div className="cat-emoji">😸</div>
            <h3>Sakura</h3>
            <p>Professional yarn chaser and expert biscuit maker.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>Made with 💕 and catnip © 2026</p>
      </footer>
    </>
  );
}

export default App;