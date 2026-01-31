# MacBook Pro Landing Page

A stunning, interactive landing page for the MacBook Pro, featuring smooth animations, 3D product visualization, and scroll-triggered effects. Built with modern web technologies to deliver a premium user experience.

## ✨ Features

- **Interactive 3D Product Viewer** - Explore the MacBook Pro with a fully interactive 3D model powered by Three.js
- **Smooth Scroll Animations** - Engaging GSAP-powered animations triggered by scroll events
- **Product Showcase** - Highlight key features, performance metrics, and specifications
- **Responsive Design** - Optimized for all screen sizes using Tailwind CSS
- **Video Integration** - High-quality video backgrounds and product demonstrations
- **State Management** - Efficient state handling with Zustand

## 🛠️ Tech Stack

- **React 19** - Latest React with React Compiler enabled for optimized performance
- **Vite** - Lightning-fast build tool and development server
- **Three.js** - 3D graphics and product visualization
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **GSAP** - Professional-grade animation library with ScrollTrigger
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **React Responsive** - Media query hooks for responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ajilps/gsap_macbook_landing.git
cd apple
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
apple/
├── public/              # Static assets
│   ├── models/         # 3D models
│   ├── videos/         # Video files
│   ├── fonts/          # Custom fonts
│   └── ...             # Images and icons
├── src/
│   ├── components/     # React components
│   │   ├── NavBar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductViewer.jsx
│   │   ├── Showcase.jsx
│   │   ├── Performance.jsx
│   │   ├── Features.jsx
│   │   ├── Highlights.jsx
│   │   └── Footer.jsx
│   ├── constants/      # App constants
│   ├── store/          # Zustand state management
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles
└── package.json

```

## 🎨 Key Components

- **NavBar** - Navigation bar with logo and menu items
- **Hero** - Landing section with video background and CTA
- **ProductViewer** - Interactive 3D MacBook Pro model
- **Showcase** - Product highlights and features
- **Performance** - Performance metrics and specifications
- **Features** - Detailed feature breakdown
- **Highlights** - Key selling points
- **Footer** - Footer with links and information

## 🔧 Configuration

The project uses:
- **React Compiler** - Enabled for automatic optimization (may impact build performance)
- **ESLint** - Configured with React-specific rules
- **Tailwind CSS** - Configured via `@tailwindcss/vite` plugin

## 📝 License

This project is for educational/demonstration purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
