import React from 'react';
import './SearchBar.scss';

interface SearchBarProps {
  totalTests: number;
  onSearch: (query: string) => void;
  onReset: () => void;
  searchQuery: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  totalTests,
  onSearch,
  onReset,
  searchQuery,
}) => {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="What test are you looking for?"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
        <span className="tests-count">{totalTests} tests</span>
      </div>
      {searchQuery && (
        <button onClick={onReset} className="reset-button">
          Reset
        </button>
      )}
    </div>
  );
};
