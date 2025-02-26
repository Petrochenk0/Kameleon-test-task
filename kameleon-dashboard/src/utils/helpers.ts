import { Status, Test, TestWithSite } from '../types';

export const formatUrl = (url: string): string => {
  return url.replace(/(https?:\/\/)?(www\.)?/, '');
};

export const sortByStatus = (a: Status, b: Status): number => {
  const order = {
    [Status.ONLINE]: 0,
    [Status.PAUSED]: 1,
    [Status.STOPPED]: 2,
    [Status.DRAFT]: 3,
  };
  return order[a] - order[b];
};

export const sortTests = (
  tests: TestWithSite[],
  field: keyof TestWithSite,
  direction: 'asc' | 'desc',
): TestWithSite[] => {
  return [...tests].sort((a, b) => {
    if (field === 'status') {
      const result = sortByStatus(a.status, b.status);
      return direction === 'asc' ? result : -result;
    }

    const valueA = String(a[field]).toLowerCase();
    const valueB = String(b[field]).toLowerCase();

    if (valueA < valueB) return direction === 'asc' ? -1 : 1;
    if (valueA > valueB) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};
