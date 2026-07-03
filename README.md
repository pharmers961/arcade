# Pocket Arcade

A tiny offline arcade of ten little games in one installable web app
(PWA), built as a single self-contained `index.html` — no servers, no build
step, no internet required after the first load.

Every game remembers your progress, settings, and win streaks between
visits (saved locally on your device), works fully offline, and is
keyboard- and screen-reader-friendly.

The home screen shows what's in progress and your streaks, with a one-tap
**Continue** card for the last game you played, plus a trophy-shelf **Stats**
screen. **Settings** offers light/dark/system theme, a colour-blind palette
(orange/blue tiles, numbered Mastermind pegs), and a vibration toggle. Each
game has a **?** how-to-play card with its rules, gestures and keyboard
shortcuts, and wins can be shared (native share sheet or clipboard).

## Games
- **Sudoku** — difficulty levels, optional timer, hints, pencil notes
- **Minesweeper** — flag mode, chording, three field sizes
- **Solitaire** — Klondike, tap-to-move, double-tap to a foundation
- **Zip** — trace one line through the numbered dots, filling every cell
- **Mahjong** — colourful shape-tile matching with undo, hint, and shuffle
- **Wordle** — guess the five-letter word in six tries (1200+ word list)
- **Mystery** — a logic-grid murder deduction puzzle (original cases)
- **Mastermind** — crack the hidden four-colour code in ten tries
- **Mini Crossword** — 34 fully-checked 5×5 grids (every letter crosses two answers) with across/down clues and hints
- **Cryptogram** — decode a substitution-ciphered quote, with hints

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
