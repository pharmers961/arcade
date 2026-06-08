# Pocket Arcade

A tiny offline arcade of fifteen little games in one installable web app
(PWA), built as a single self-contained `index.html` — no servers, no build
step, no internet required after the first load.

Every game remembers your progress, settings, and win streaks between
visits (saved locally on your device), works fully offline, and is
keyboard- and screen-reader-friendly.

## Games
- **Sudoku** — difficulty levels, optional timer, hints, pencil notes
- **Minesweeper** — flag mode, chording, three field sizes
- **Solitaire** — Klondike, tap-to-move, double-tap to a foundation
- **Zip** — trace one line through the numbered dots, filling every cell
- **Mahjong** — colourful shape-tile matching with undo, hint, and shuffle
- **Wordle** — guess the five-letter word in six tries (1200+ word list)
- **Backgammon** — full rules vs a bot: hitting, the bar, and bearing off
- **Mystery** — a logic-grid murder deduction puzzle (original cases)
- **Dots & Boxes** — claim more squares than the bot on a 4×4 grid
- **Nim · 21** — take-away duel vs a perfect bot (two modes)
- **Mastermind** — crack the hidden four-colour code in ten tries
- **Mini Crossword** — hand-made 5×5 grids with across/down clues and hints
- **Cryptogram** — decode a substitution-ciphered quote, with hints
- **Pong** — first to seven against a tracking bot (drag or arrow keys)
- **Yahtzee** — roll, hold, and fill the scorecard for a high score

## Run it
Just open `index.html` in any modern browser — it works completely offline
(fonts are embedded). To install it to a phone home screen, it needs to be
served over HTTPS (see below).

## Host it free on GitHub Pages
1. Push these files to a GitHub repo (all files at the repo root).
2. Repo **Settings → Pages → Build and deployment → Deploy from a branch**,
   pick `main` and `/ (root)`, save.
3. After a minute it's live at `https://<your-username>.github.io/<repo>/`.
4. Open that link on your phone, then "Add to Home Screen" (iPhone: Safari →
   Share) / "Install app" (Android: Chrome menu).

## Tech
Plain HTML/CSS/JavaScript. The service worker (`sw.js`) caches everything for
offline use; `manifest.webmanifest` makes it installable.

Built with Claude.
