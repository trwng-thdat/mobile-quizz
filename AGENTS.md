# Repository Guidelines

## Project Structure & Module Organization

This repository is a single-page static quiz app split into HTML, CSS, and JavaScript.

- `quiz.html` contains the page shell and links to external assets.
- `styles.css` contains all layout, responsive, and quiz state styling.
- `app.js` contains quiz data, rendering, shuffle, answer tracking, and grading logic.
- There are no separate `src/`, `tests/`, or asset directories yet.
- If the app grows, prefer moving files by responsibility into `src/` and `assets/`.

Keep quiz content close to the existing `quizData` structure in `app.js` so rendering and scoring logic remain predictable.

## Build, Test, and Development Commands

No build system or package manager is required.

- Open `quiz.html` directly in a browser to run the app locally.
- Use a lightweight static server if browser behavior differs from file loading:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000/quiz.html`.

There is no automated build step at this time.

## Coding Style & Naming Conventions

- Use 2-space indentation for HTML, CSS, and JavaScript to match the existing file.
- Keep CSS class names descriptive and kebab-case, such as `.progress-bar` or `.question-container`.
- Use camelCase for JavaScript variables and functions, such as `currentQuestion` and `nextQuestion()`.
- Prefer `const` by default and `let` only for reassigned values.
- Keep UI text consistent with the app language. The current quiz interface is Vietnamese.

## Testing Guidelines

There is no automated test framework configured. Test changes manually in a modern browser.

Before submitting changes, verify:

- The quiz loads without console errors.
- Previous and next navigation works.
- Answer selection, feedback, scoring, review, and retake flows work.
- Layout remains usable on desktop and mobile viewport widths.

If automated tests are added later, place them in a `tests/` directory and document the test command here.

## Commit & Pull Request Guidelines

This folder does not currently include Git history, so no repository-specific commit convention is available. Use concise, imperative commit messages, for example:

- `Add quiz review state handling`
- `Fix mobile spacing on result screen`

Pull requests should include a short summary, testing notes, and screenshots or screen recordings for visible UI changes. Link related issues when available and call out any changes to quiz data separately from behavior changes.

## Agent-Specific Instructions

Keep edits tightly scoped. Avoid introducing dependencies, build tooling, or framework rewrites unless the task explicitly requires them. For small changes, preserve the current static-file structure and update this guide if project commands or layout change.
