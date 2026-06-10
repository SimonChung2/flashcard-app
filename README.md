# Flashcards

A French-English flashcard app built with **React** and **Vite**.

The app helps users study civil engineering, construction, and geotechnical vocabulary by showing a term in one language and hiding the translation until the user chooses to reveal it.

This project was created as a lightweight study tool and portfolio project to demonstrate React fundamentals, state management, dynamic rendering, and responsive front-end styling.

---

## Features

* Review French-English geotechnical vocabulary flashcards
* Switch between **English → French** and **French → English** study modes
* Show and hide the answer for each card
* Move to the next card
* Move to the previous card
* Pick a random card
* Display the category for each vocabulary term
* Track progress through the card deck
* Responsive layout for desktop and mobile screens

---

## Tech Stack

* React
* Vite
* JavaScript
* HTML
* CSS

---

## Project Structure

```text id="w9o0qu"
flashcard-app/
├── public/
├── src/
│   ├── assets/
│   ├── data/
│   │   └── terms.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## How It Works

1. The app loads vocabulary terms from `src/data/terms.js`.
2. Each term includes an English word, a French translation, and a category.
3. The user selects a study mode:

   * English → French
   * French → English
4. The app displays the question side of the card.
5. The answer is hidden by default.
6. The user clicks **Show Answer** to reveal the translation.
7. The user can move through the deck using **Previous**, **Next**, or **Random**.

---

## Example Flashcard Data

```javascript id="jk7iu9"
{
  english: "bearing capacity",
  french: "capacité portante",
  category: "Foundations",
}
```

---

## How to Run Locally

### 1. Clone the repository

```bash id="7nlyiq"
git clone https://github.com/SimonChung2/flashcard-app.git
cd flashcard-app
```

### 2. Install dependencies

```bash id="6iagct"
npm install
```

### 3. Start the development server

```bash id="jx8br8"
npm run dev
```

### 4. Open the app in your browser

Vite will show a local development URL, usually:

```text id="0q0kbs"
http://localhost:5173
```

---

## Build for Production

To create a production build:

```bash id="m4upvj"
npm run build
```

To preview the production build locally:

```bash id="n9f4pc"
npm run preview
```

---

## Vocabulary Categories

The current card deck includes terms from categories such as:

* Foundations
* Soil Mechanics
* Earthworks
* Site Investigation
* Soils

---

## Project Purpose

This project demonstrates:

* Creating a React app with Vite
* Managing UI state with `useState`
* Rendering dynamic flashcard content
* Handling button click events
* Switching between display modes
* Importing and using data from a separate JavaScript file
* Styling a responsive user interface with CSS
* Building a practical study tool for technical vocabulary

---

## Future Improvements

Possible future additions:

* Add more vocabulary terms
* Add category filtering
* Allow users to create their own flashcards
* Save custom flashcards using local storage
* Add images to help users remember each term
* Add pronunciation audio
* Add progress tracking by category
* Add spaced repetition functionality
* Add a search feature
* Deploy the app publicly

---

## Disclaimer

This app is intended as a learning and portfolio project.
Translations may vary depending on technical context, region, or professional usage.

---

## Author

**Simon Chung**

Civil Engineering graduate and web developer with experience in construction project engineering, technical documentation, French language learning, and front-end web development.
