import { useState } from "react";
import "./App.css";
import { terms } from "./data/terms";

function App() {

  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [mode, setMode] = useState("english-to-french");

  const currentCard = terms[index];
  
  const question = mode === "english-to-french" ? currentCard.english : currentCard.french;

  const answer = mode === "english-to-french" ?
  currentCard.french : currentCard.english;

  function handleShowAnswer() {
    setShowAnswer(!showAnswer);
  }

  function handleNextCard() {
    setShowAnswer(false);
    if (index === terms.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePrevCard() {
    setShowAnswer(false);
    if (index === 0){
      setIndex(terms.length - 1);
    } else { 
      setIndex(index - 1);
    }
  }
  
  function handleRandomCard() {
    setShowAnswer(false);
    setIndex(Math.floor(Math.random() * terms.length));
  }

  function handleModeChange(newMode) {
    setShowAnswer(false);
    setMode(newMode);
  }


  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">Civil Engineering Terms</p>
        <h1>French-English Flashcards</h1>
        <p className="subtitle">Learn simple geotechnical vocabulary</p>
      </section>

      <section className="card">
        <p className="category-pill">Category: {currentCard.category}</p>
        <p className="question-label">
          {mode === "english-to-french" ? "English term" : "French term"}
        </p>
        <h2>{question}</h2>
        <p className="answer-label">
          {mode === "english-to-french" ? "French translation" : "English translation"}
        </p>
        {showAnswer && (
          <div className="answer-box">
            <p className="answer">{answer}</p>
          </div>)}
        <button className="primary-button" onClick={handleShowAnswer}>
          {showAnswer ? "Hide Answer":"Show Answer"}
        </button>
      </section>

      <section className="controls">
        <button onClick={handlePrevCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
        <button onClick={handleRandomCard}>Random</button>
      </section>

      <section className="mode-box">
        <p>Mode</p>

        <button 
          onClick={() => handleModeChange("english-to-french")} 
          className={mode === "english-to-french" ? "active" : ""}
        >
          English → French
        </button>

        <button
          onClick={() => handleModeChange("french-to-english")}
          className={mode === "french-to-english" ? "active" : ""}
        >
          French → English
        </button>

      </section>

      <p className="progress">Card {index + 1} of {terms.length}</p>

    </main>
  );
}

export default App