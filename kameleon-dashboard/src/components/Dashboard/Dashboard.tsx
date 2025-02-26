import React, { useEffect, useState } from 'react';
import { TestWithSite } from '../../types';
import { api } from '../../services/api';
import { formatUrl, sortTests } from '../../utils/helpers';
import { SearchBar } from '../SearchBar/SearchBar';
import { TestTable } from '../TestTable/TestTable';
import './Dashboard.scss';

export const Dashboard: React.FC = () => {
  const [tests, setTests] = useState<TestWithSite[]>([]);
  const [filteredTests, setFilteredTests] = useState<TestWithSite[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<keyof TestWithSite>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [testsData, sitesData] = await Promise.all([api.getTests(), api.getSites()]);

        const testsWithSites = testsData.map((test) => {
          const site = sitesData.find((site) => site.id === test.siteId);
          return {
            ...test,
            site: site ? formatUrl(site.url) : '',
          };
        });

        setTests(testsWithSites);
        setFilteredTests(testsWithSites);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredTests(tests);
      return;
    }

    const filtered = tests.filter((test) => test.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredTests(filtered);
  };

  const handleSort = (field: keyof TestWithSite) => {
    const newDirection = field === sortField && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(newDirection);
    setFilteredTests(sortTests(filteredTests, field, newDirection));
  };

  const handleReset = () => {
    setSearchQuery('');
    setFilteredTests(tests);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <SearchBar
        totalTests={filteredTests.length}
        onSearch={handleSearch}
        onReset={handleReset}
        searchQuery={searchQuery}
      />
      <TestTable
        tests={filteredTests}
        onSort={handleSort}
        sortField={sortField}
        sortDirection={sortDirection}
      />
    </div>
  );
};
