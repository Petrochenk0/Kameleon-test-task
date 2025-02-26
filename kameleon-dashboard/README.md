# Kameleon Dashboard

A React application for displaying and managing A/B tests.

## Features

- Display list of A/B tests in a table format
- Sort tests by name, type, status, and site
- Filter tests by name
- View test results
- Finalize draft tests
- Responsive design
- Keyboard navigation support

## Technologies Used

- React 18
- TypeScript
- React Router v6
- Axios for API calls
- SCSS for styling
- Classnames for conditional class names

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Route components
├── services/       # API and other services
├── types/          # TypeScript type definitions
├── utils/          # Helper functions
└── styles/         # Global styles and variables
```

## API Integration

The application integrates with a REST API that provides:

- List of tests
- List of sites
- Individual test details
- Individual site details

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
