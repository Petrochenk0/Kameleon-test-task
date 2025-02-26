import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { TestWithSite, Type, Status } from '../../types';
import './TestTable.scss';

interface TestTableProps {
  tests: TestWithSite[];
  onSort: (field: keyof TestWithSite) => void;
  sortField: keyof TestWithSite;
  sortDirection: 'asc' | 'desc';
}

export const TestTable: React.FC<TestTableProps> = ({
  tests,
  onSort,
  sortField,
  sortDirection,
}) => {
  const navigate = useNavigate();

  const handleSort = (field: keyof TestWithSite) => {
    onSort(field);
  };

  const getSortIcon = (field: keyof TestWithSite) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  const getStatusClass = (status: Status) => {
    return classNames('status', {
      'status--online': status === Status.ONLINE,
      'status--paused': status === Status.PAUSED,
      'status--stopped': status === Status.STOPPED,
      'status--draft': status === Status.DRAFT,
    });
  };

  return (
    <table className="test-table">
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>NAME {getSortIcon('name')}</th>
          <th onClick={() => handleSort('type')}>TYPE {getSortIcon('type')}</th>
          <th onClick={() => handleSort('status')}>STATUS {getSortIcon('status')}</th>
          <th onClick={() => handleSort('site')}>SITE {getSortIcon('site')}</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {tests.map((test) => (
          <tr key={test.id}>
            <td>{test.name}</td>
            <td>{test.type}</td>
            <td>
              <span className={getStatusClass(test.status)}>{test.status}</span>
            </td>
            <td>{test.site}</td>
            <td>
              {test.status !== Status.DRAFT ? (
                <button className="action-button" onClick={() => navigate(`/results/${test.id}`)}>
                  Results
                </button>
              ) : (
                <button className="action-button" onClick={() => navigate(`/finalize/${test.id}`)}>
                  Finalize
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
