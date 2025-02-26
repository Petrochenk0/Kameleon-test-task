import React from 'react';
import { useParams } from 'react-router-dom';

export const FinalizePage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();

  return (
    <div className="finalize-page">
      <h1>Finalize Test #{testId}</h1>
      {/* Add finalize content here */}
    </div>
  );
};
