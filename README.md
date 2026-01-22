# card-crud-app

This repository contains:
- A mock API using json-server under `api/mock_data_tutorial_nagendra`
- A React app (Vite + Tailwind) under `card-app-react/mock_data_tutorial_nagendra/card-app-react`

## Run locally

Start both servers in separate terminals.

API (json-server):
1. Open terminal in `api/mock_data_tutorial_nagendra`
2. Install deps and start:
   - `npm install`
   - `npm start` (serves http://localhost:8080)

Frontend (Vite):
1. Open terminal in `card-app-react/mock_data_tutorial_nagendra/card-app-react`
2. Install deps and start dev server:
   - `npm install`
   - `npm run dev` (opens http://localhost:5173)

The app expects an API at `VITE_API_URL` (defaults to `http://localhost:8080`).

## Environment

Copy `.env.example` to `.env` inside the frontend folder if you want to override defaults.

```
VITE_API_URL=http://localhost:8080
```

## Deploy to GitHub Pages

GitHub Pages serves static files only. The mock API will not run on Pages; you must host the API separately (e.g., Render, Railway, etc.) and set `VITE_API_URL` to that hosted endpoint for production builds.

A GitHub Actions workflow is included to build and deploy the frontend to the `gh-pages` branch on every push to `main`.

For a project site like `https://<username>.github.io/card-crud-app`, asset paths are set during production build.

## Notes

- CRUD operations (create/edit/delete) modify the `json-server` dataset; use your fork or a separate hosted instance if you want persistence.
- Tailwind is configured via `@tailwindcss/vite` plugin.