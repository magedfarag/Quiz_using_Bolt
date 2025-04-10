# Quizzy - Gamified Learning Platform

## Project Overview
Quizzy is an interactive quiz application designed for primary school students, featuring:
- Engaging student interface with gamification elements
- Comprehensive admin dashboard for content management
- REST API backend with JSON database (proof of concept)

## Key Features

### Student Experience
- 🎮 Interactive quiz interface with animations
- 📊 Detailed results with performance analytics
- 🏆 Achievement system with badges
- 📝 Question review with explanations
- 📧 Email results functionality

### Admin Features
- 🔐 Secure authentication with role-based access
- 📝 Full CRUD operations for quizzes/questions
- 👥 User management system
- 📈 Analytics dashboard with charts
- ⚙️ System configuration settings
- 📜 Audit logging system

## Technical Specifications

### Frontend Stack
- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + custom animations
- **Icons**: Lucide React
- **Charts**: Custom SVG-based components
- **Build**: Vite 5

### Backend Stack
- **Server**: Express.js
- **Database**: JSON (proof of concept, ready for Supabase integration)
- **Authentication**: JWT-based
- **PDF Generation**: jsPDF

### Testing
- **Unit Tests**: Vitest + React Testing Library
- **E2E Tests**: Supertest
- **Coverage**: Vitest coverage reports

## Development Setup

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
git clone https://github.com/yourusername/quizzy.git
cd quizzy
npm install
```

### Running the Application
```bash
# Start both frontend and backend
npm start

# Frontend only (development)
npm run dev

# Backend only (development)
npm run server

# Production build
npm run build
```

### Testing
```bash
# Run unit tests
npm test

# Run tests with coverage
npm run coverage
```

## Environment Variables
Create a `.env` file in the root directory with:
```
VITE_API_BASE_URL=http://localhost:3001
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure
```
src/
├── api/            # API service modules
├── components/     # Reusable components
├── data/           # Mock data and types
├── pages/          # Page components
│   ├── admin/      # Admin interface
│   └── student/    # Student interface
├── services/       # Business logic
└── styles/         # Global styles
```

## Deployment
The application can be deployed to:
- Vercel
- Netlify
- Any Node.js hosting platform

## License
MIT License - See LICENSE file for details

## Roadmap
- [ ] Supabase integration
- [ ] Real-time analytics
- [ ] Mobile app version
- [ ] Teacher
