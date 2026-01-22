# Card CRUD Application

A full-stack React application for managing user data through a card-based interface with complete CRUD (Create, Read, Update, Delete) functionality.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwind-css&logoColor=white)
![json-server](https://img.shields.io/badge/json--server-0.17.4-00EF8B?logo=json-server&logoColor=black)

## Features

- Responsive grid layout (1-4 columns based on screen size)
- Card-based display with user avatars, names, emails, and gender
- Dropdown menu on each card with Edit/Delete options
- Modal forms for creating and editing users
- "Load More" pagination button
- Form validation with React Hook Form
- Real-time UI updates after CRUD operations
- Environment-based API configuration

## Project Structure

```
.
├── api/
│   └── mock_data_tutorial_nagendra/      # json-server API
│       ├── mock_data.json                 # Mock user data
│       ├── package.json
│       ├── server.cjs                     # Production server
│       └── README.md
├── card-app-react/
│   └── mock_data_tutorial_nagendra/
│       └── card-app-react/                # React frontend
│           ├── src/
│           │   ├── components/
│           │   │   ├── Card.jsx           # User card component
│           │   │   ├── EditForm.jsx       # Create/Edit modal
│           │   │   └── Pagination.jsx     # Load more button
│           │   ├── App.jsx                # Main app component
│           │   └── main.jsx
│           ├── package.json
│           ├── vite.config.js
│           └── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml                     # GitHub Pages workflow
├── vercel.json                            # Vercel deployment config
└── README.md
```

## Tech Stack

### Frontend
- **React 19** - Core framework
- **Vite 6.2** - Build tool and dev server
- **Tailwind CSS v4** - Styling with `@tailwindcss/vite` plugin
- **React Router DOM v7** - Client-side routing
- **React Hook Form** - Form handling and validation

### Backend (API)
- **json-server v0.17.4** - REST API mock server
- **Node.js** - Runtime environment
- **Express.js** - Web framework (via json-server)

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm package manager

### Local Development

Start both servers in separate terminals:

#### 1. API Server (json-server)

```bash
cd api/mock_data_tutorial_nagendra
npm install
npm start
```

The API will run on `http://localhost:8080`

#### 2. Frontend (Vite)

```bash
cd card-app-react/mock_data_tutorial_nagendra/card-app-react
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

## Environment Variables

Create a `.env` file in the frontend directory:

```env
# Local development
VITE_API_URL=http://localhost:8080

# Production (use your deployed API URL)
VITE_API_URL=https://your-api-url.onrender.com
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users (supports `_page` and `_per_page` for pagination) |
| GET | `/users/:id` | Get a specific user by ID |
| POST | `/users` | Create a new user |
| PUT | `/users/:id` | Update a user by ID |
| DELETE | `/users/:id` | Delete a user by ID |

### Example API Requests

```bash
# Get paginated users (20 per page)
curl http://localhost:8080/users?_page=1&_per_page=20

# Create a new user
curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","email":"john@example.com","gender":"male"}'

# Update a user
curl -X PUT http://localhost:8080/users/1 \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Jane","lastName":"Smith","email":"jane@example.com","gender":"female"}'

# Delete a user
curl -X DELETE http://localhost:8080/users/1
```

## Deployment

### GitHub Pages (Frontend)

The `.github/workflows/deploy.yml` workflow automatically builds and deploys the frontend to GitHub Pages on every push to `main`.

**Important:** GitHub Pages serves static files only. The mock API must be hosted separately (Render, Railway, etc.) and `VITE_API_URL` must point to the hosted endpoint for production builds.

### Render (API)

1. Create an account on [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - **Build Command:** `cd api/mock_data_tutorial_nagendra && npm install`
   - **Start Command:** `cd api/mock_data_tutorial_nagendra && node server.cjs`
5. Deploy and note your API URL

### Vercel (Alternative)

The `vercel.json` configuration allows for deployment on Vercel if needed.

## Available Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### API
```bash
npm start        # Start production server
```

## CRUD Operations

### Create User
1. Click the "Add New User" button
2. Fill in the form (first name, last name, email, gender)
3. Click "Save"

### View Users
- Users are displayed in a responsive grid layout
- Scroll to see all users or click "Load More" for pagination

### Update User
1. Click the three-dot menu on a card
2. Select "Edit"
3. Modify the form fields
4. Click "Save"

### Delete User
1. Click the three-dot menu on a card
2. Select "Delete"
3. Confirm the deletion

## Notes

- **Data Persistence:** CRUD operations modify the `json-server` dataset. For persistent data, use your fork or a separate hosted instance.
- **CORS:** The API is configured for cross-origin requests to work with the frontend.
- **Tailwind CSS:** Styled using `@tailwindcss/vite` plugin with Tailwind v4.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.