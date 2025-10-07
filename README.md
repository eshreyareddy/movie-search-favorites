# Movie Search + Favorites

A full-stack web app that lets users search movies from the **OMDb API** and manage their favorites.  
Built using **Next.js (React, TanStack Query)** on the frontend and **NestJS (Node.js)** on the backend.

---

## Tech Stack
**Frontend**
- Next.js 15 (React)
- TanStack Query (React Query)
- TailwindCSS
- TypeScript

**Backend**
- NestJS
- Axios (for OMDb API integration)
- In-memory data store (favorites)

---

## Features
-Search movies via OMDb API  
-View title, year, and poster in a responsive grid  
-Add or remove favorites (stored in memory)  
-Favorites page with cached results  
-Pagination / infinite scroll for search results  
-Mobile-friendly layout with TailwindCSS  
-Clear modular codebase

---

## API Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| `GET` | `/movies/search?q=<query>` | Search for movies via OMDb |
| `GET` | `/favorites` | List all favorite movies |
| `POST` | `/favorites` | Add a movie to favorites |
| `DELETE` | `/favorites/:imdbID` | Remove from favorites |

---

## Architecture Overview
**Frontend**
- `useMovies()` → fetches paginated movie data
- `useFavorites()` → handles add/remove/list mutations
- `MovieCard` → displays movie with favorite toggle
- `TanStack Query` handles caching + background updates

**Backend**
- `/movies` → queries OMDb API and returns simplified JSON  
- `/favorites` → stores movies in memory for current session

---

Getting Started
1. Clone the repository
git clone https://github.com/eshreyareddy/movie-search-favorites.git
cd movie-search-favorites

2. Run the backend
cd backend
npm install
npm run start:dev

The backend runs at http://localhost:4000

4. Run the frontend
cd ../frontend
npm install
npm run dev

The frontend runs at http://localhost:3000

**Bonus Enhancements**
-If this were deployed to production, I’d add:
-Persistent favorites (SQLite or Supabase)
-API rate-limit caching (Redis)
-Auth (Supabase / Auth.js)
-Docker deployment
-CI/CD (GitHub Actions)
-Unit tests (Jest + React Testing Library)

 **UI Preview**
Responsive movie grid with favorite toggles and pagination.
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/9572e8fb-0ba3-4f34-82fc-26146afaa71f" />


**Reasoning**
This project uses Client-Side Rendering (CSR) for better interactivity and easier caching through TanStack Query.
If SEO were a priority, switching to SSR would be trivial in Next.js.

