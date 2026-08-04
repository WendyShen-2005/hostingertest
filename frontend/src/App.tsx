import { useEffect, useState } from "react";
import "./App.css";
import { getRandomPage } from "./services/services";

const URL_START = import.meta.env.VITE_URL_START;

const CAT_FRAME_A = ` /\\_/\\
( o.o )
 > ^ <
 /   \\
^     ^`;

const CAT_FRAME_B = ` /\\_/\\
( o.o )
 > ^ <
/     \\
 ^   ^ `;

const WALKING_CATS = [
  { duration: 9, delay: 0, top: 0 },
  { duration: 12, delay: -4, top: 32 },
  { duration: 7, delay: -2, top: 60 },
];

type Tab = "cats" | "article";

type Article = {
  name: string;
  content: string;
  partner: { name: string } | null;
};

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("cats");
  const [output, setOutput] = useState("");
  const [articleOutput, setArticleOutput] = useState<Article | string | null>(
    null
  );
  const [walkFrame, setWalkFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWalkFrame((f) => (f === 0 ? 1 : 0)), 280);
    return () => clearInterval(id);
  }, []);

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

  const handleRandomArticle = async () => {
    // Erase whatever was there before we go fetch the next one.
    setArticleOutput(null);

    try {
      const response = await getRandomPage();

      setArticleOutput(response);
    } catch {
      // No /articles/random endpoint yet — this is wired up and ready
      // for whenever the backend grows one.
      setArticleOutput(
        "✨ No article yet — this button is ready to go the moment the backend serves one!"
      );
    }
  };

  return (
    <>
      <header>
        <h1>🐾 Meow &amp; Co. 🐾</h1>
        <p>The pinkest corner of the cat internet</p>
      </header>

      <div className="tab-bar">
        <button
          className={`tab-button ${activeTab === "cats" ? "active" : ""}`}
          onClick={() => setActiveTab("cats")}
        >
          Super Cute Cats Page
        </button>
        <button
          className={`tab-button ${activeTab === "article" ? "active" : ""}`}
          onClick={() => setActiveTab("article")}
        >
          Super Cool Random Article Tab
        </button>
      </div>

      <main className="container tab-panel">
        {activeTab === "cats" && (
          <>
            <section className="welcome-card">
              <h2>Welcome, Human!</h2>
              <p>
                Hi there! This is a magical place dedicated to all things
                fluffy, pink, and feline. Take a look around and enjoy the
                pure cuteness.
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
          </>
        )}

        {activeTab === "article" && (
          <>
            <section className="welcome-card">
              <h2>Super Cool Random Article Tab</h2>
              <p>
                Press the button below for a totally random, super cool
                article. Every press clears out the old one first.
              </p>

              <button
                className="cute-btn"
                onClick={handleRandomArticle}
              >
                Give me random super cool article
              </button>

              <div id="article-output" className="article-output">
                {typeof articleOutput === "string" ? (
                  <p>{articleOutput}</p>
                ) : (
                  articleOutput && (
                    <>
                      <h2>{articleOutput.name}</h2>
                      {articleOutput.partner && (
                        <h3>{articleOutput.partner.name}</h3>
                      )}
                      <p style={{ whiteSpace: "pre-wrap" }}>
                        {articleOutput.content}
                      </p>
                    </>
                  )
                )}
              </div>
            </section>

            <div className="cat-walk-track">
              {WALKING_CATS.map((cat, i) => (
                <pre
                  key={i}
                  className="ascii-cat"
                  style={{
                    top: `${cat.top}px`,
                    animationDuration: `${cat.duration}s`,
                    animationDelay: `${cat.delay}s`,
                  }}
                >
                  {walkFrame === 0 ? CAT_FRAME_A : CAT_FRAME_B}
                </pre>
              ))}
            </div>
          </>
        )}
      </main>

      <footer>
        <p>Made with 💕 and catnip © 2026</p>
      </footer>
    </>
  );
}

export default App;