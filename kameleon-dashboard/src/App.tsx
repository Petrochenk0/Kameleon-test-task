import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { ResultsPage } from './pages/ResultsPage';
import { FinalizePage } from './pages/FinalizePage';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/results/:testId" element={<ResultsPage />} />
        <Route path="/finalize/:testId" element={<FinalizePage />} />
      </Routes>
    </Router>
  );
};
