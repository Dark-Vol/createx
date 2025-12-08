# Createx Online School

A modern online learning platform built with React and TypeScript. Createx Online School provides a comprehensive educational experience with courses, events, blog posts, and user authentication.

## 🚀 Technologies

* **React** - UI library
* **Vite** - Build tool and dev server
* **TypeScript + SWC** - Type-safe JavaScript with fast compilation
* **Tailwind CSS** - Utility-first CSS framework
* **SCSS** - CSS preprocessor with variables and nesting
* **React Router DOM** - Client-side routing
* **Firebase** - Backend services (authentication, database)
* **Zustand** - State management
* **React Hook Form** - Form handling and validation
* **Swiper** - Touch slider component
* **Lucide React** - Icon library

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd createx
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── api/
│   └── firebase/          # Firebase configuration
├── assets/                 # Static assets (images, icons)
├── components/             # Reusable components
│   ├── footer/            # Footer components
│   ├── forms/             # Form components
│   ├── header/            # Header component
│   ├── logo/              # Logo component
│   ├── modal/             # Modal components
│   └── navbar/            # Navigation components
├── hooks/                  # Custom React hooks
├── pages/                  # Page components
│   ├── about-us/          # About Us page
│   ├── blog/              # Blog page
│   ├── contacts/          # Contacts page
│   ├── courses/           # Courses listing page
│   ├── course/            # Single course page
│   ├── events-grid-view/  # Events grid view
│   ├── events-list-view/  # Events list view
│   ├── event/             # Single event page
│   ├── homepage/          # Homepage with sections
│   ├── not-found/         # 404 page
│   └── single-post/       # Single blog post page
├── styles/                 # Global styles
│   ├── components/        # Component styles
│   ├── pages/             # Page-specific styles
│   ├── UI/                # UI component styles
│   ├── global.scss        # Global styles
│   ├── index.scss         # Main styles entry
│   └── variables.scss     # SCSS variables
├── types/                  # TypeScript type definitions
├── UI/                     # UI components
│   ├── form/              # Form UI components
│   └── link/               # Link component
└── utilities/              # Utility functions

public/
└── homepage/               # Public assets for homepage
```

## 🎯 Features

- **Homepage** with multiple sections:
  - Studying section with video
  - Advantages showcase
  - Courses listing
  - Benefits section
  - Events calendar
  - Certificate partners
  - Team members

- **Pages**:
  - About Us
  - Blog with posts
  - Contacts
  - Courses catalog
  - Events (grid and list views)
  - Single course/event/post pages

- **Authentication**:
  - Login modal
  - Registration modal
  - Firebase integration

- **Responsive Design**:
  - Mobile-first approach
  - Tailwind CSS for responsive utilities
  - SCSS for custom styling

## 🔧 Configuration

### Firebase Setup
Configure your Firebase credentials in `src/api/firebase/app.ts`

### Path Aliases
The project uses path aliases configured in `tsconfig.json`:
- `@/` - points to `src/`
- `@components/` - points to `src/components/`
- `@pages/` - points to `src/pages/`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility classes
- **SCSS** for component-specific styles with:
  - Variables for colors, spacing, etc.
  - Nesting for better organization
  - Modular styles per component

## 📄 License

This project is private and proprietary.
