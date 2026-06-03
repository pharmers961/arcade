# Pocket Arcade

A tiny offline arcade of eight little games in one installable web app
(PWA), built as a single self-contained `index.html` — no servers, no build
step, no internet required after the first load.

## Games
- **Sudoku** — difficulty levels, optional timer, hints, pencil notes
- **Minesweeper** — flag mode, chording, three field sizes
- **Solitaire** — Klondike, tap-to-move, double-tap to a foundation
- **Zip** — trace one line through the numbered dots, filling every cell
- **Mahjong** — colourful shape-tile matching with undo, hint, and shuffle
- **Wordle** — guess the five-letter word in six tries (1200+ word list)
- **Backgammon** — full rules vs a bot: hitting, the bar, and bearing off
- **Mystery** — a logic-grid murder deduction puzzle (original cases)

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
