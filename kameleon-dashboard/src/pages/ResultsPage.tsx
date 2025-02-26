import React from 'react';
import { useParams } from 'react-router-dom';

export const ResultsPage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();

  return (
    <div className="results-page">
      <h1>Results for Test #{testId}</h1>
      {/* Add results content here */}
    </div>
  );
};
