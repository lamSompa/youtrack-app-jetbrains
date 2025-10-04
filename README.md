---

# YouTrack App

A React + TypeScript application that demonstrates a YouTrack extension page.  
Displays a list of available projects and provides an admin toggle with persistent state using localStorage.  
Built with JetBrains Ring UI components for a clean interface.

---

## Project Overview

- Displays a list of available projects (mock data)
- Admin toggle enables/disables a boolean flag (simulating a test management admin panel)
- State is persisted in localStorage
- JetBrains-style UI using Ring UI (`Panel`, `Island`, `Toggle`)
- Accessible and responsive layout
- Clean code with TypeScript and modular components

---

## Features

- Project list in a readable layout
- Admin toggle with persistent state
- Consistent JetBrains UI
- Semantic HTML and keyboard accessibility
- Structured for easy extension

---

## Tech Stack

- React (hooks, functional components)
- TypeScript
- Ring UI
- Jest & React Testing Library
- LocalStorage

---

## Installation & Development

```bash
git clone https://github.com/lamSompa/youtrack-app-jetbrains.git
cd youtrack-app-jetbrains
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Running Tests

```bash
npm test
```

To check code coverage:

```bash
npm test -- --coverage
```

---

## Building for Production

```bash
npm run build
```

Creates an optimized build in the `build/` folder.

---

## Project Structure

```
youtrack-app-jetbrains/
├── public/
├── src/
│   ├── MainMenuPage.tsx
│   ├── App.tsx
│   ├── index.tsx
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

---

## Clean Code & Best Practices

- Modular components and separation of concerns
- Type-safe state and props
- Consistent, descriptive naming
- Semantic HTML and accessibility
- Milestone-based commits

---

## Design Decisions

- Ring UI for JetBrains-style interface
- Plain React list for project display (for compatibility)
- LocalStorage for persistence
- Single-page layout for MAIN_MENU_ITEM extension point

---

## Improvements for the Future

- Integrate with the real YouTrack API
- Add more Ring UI components
- Expand unit and integration test coverage
- Enhance accessibility
- Add error handling and loading states
- Further UI polish and responsive design

---

## Integration Guidance

- Modularize main page for extension
- Replace mock data with API calls
- Ensure UI consistency
- Abstract persistence logic

---

## License

Demonstration and educational purposes only.  
Not affiliated with JetBrains or YouTrack.

---

## Author

Made by [lamSompa](https://github.com/lamSompa)

---
