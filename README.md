# Movie Search and Favorites

A full-stack web application that allows users to search movies using the OMDb API and manage their favorites list.  
The project demonstrates a modular full-stack architecture with **Next.js (React, TanStack Query)** for the frontend and **NestJS (Node.js)** for the backend.

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
- In-memory data store for favorites

---

## Features

- Search movies via OMDb API  
- View title, year, and poster in a responsive grid  
- Add or remove favorites (stored in memory)  
- Favorites page with cached results  
- Pagination / infinite scrolling for search results  
- Mobile-friendly interface built with TailwindCSS  
- Clear, maintainable, modular codebase

---

## API Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/movies/search?q=<query>` | Search for movies using OMDb |
| GET | `/favorites` | Retrieve all favorite movies |
| POST | `/favorites` | Add a movie to favorites |
| DELETE | `/favorites/:imdbID` | Remove a movie from favorites |

---

## Architecture Overview

**Frontend**
- `useMovies()` fetches paginated movie data  
- `useFavorites()` manages add, remove, and list mutations  
- `MovieCard` component displays each movie with a favorite toggle  
- TanStack Query handles caching and background refetching

**Backend**
- `/movies` module queries OMDb API and returns simplified results  
- `/favorites` module manages an in-memory list of favorite movies  
- CORS enabled for local frontend communication

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/eshreyareddy/movie-search-favorites.git
cd movie-search-favorites
2. Run the backend
bash
Copy code
cd backend
npm install
npm run start:dev
The backend will start on http://localhost:4000

3. Run the frontend
bash
Copy code
cd ../frontend
npm install
npm run dev
The frontend will start on http://localhost:3000

Future Improvements
If deployed to production, the following enhancements are recommended:

Persistent storage using SQLite or PostgreSQL

API caching layer (Redis)

User authentication (Supabase or Auth.js)

Docker deployment for consistency

CI/CD pipeline with GitHub Actions

Unit tests using Jest and React Testing Library

 UI Preview
Responsive movie grid with favorite toggles and pagination.
(You can add screenshots or a short GIF here after deployment.)

 Reasoning
This project uses Client-Side Rendering (CSR) for better interactivity and easier caching through TanStack Query.
If SEO were a priority, switching to SSR would be trivial in Next.js.

