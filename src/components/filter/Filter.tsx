import React from 'react';

import { useActions, useAppStore } from 'hooks/useRedux';
import styles from './filter.module.scss';
import { IFilterState } from 'store/filterReducer/filterReducer';

interface IFilterProps {
  searchHandler: (params: IFilterState) => void;
}

export function Filter({ searchHandler }: IFilterProps) {
  const { name, pageSize } = useAppStore();
  const { setQuery, setPageSize } = useActions();

  return (
    <form
      className={styles.filter}
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        searchHandler({ name, pageSize });
      }}
    >
      <div className={styles.item}>
        <label htmlFor="searchQuery">Card name</label>
        <input
          id="searchQuery"
          value={name}
          onInput={(e) => setQuery(e.currentTarget.value)}
          data-testid="search"
        />
      </div>

      <div className={styles.item}>
        <label htmlFor="pageLimit">page size</label>
        <select
          defaultValue={pageSize}
          onInput={(e) => setPageSize(+e.currentTarget.value)}
          name="pageSize"
          id="pageSize"
        >
          <option defaultChecked value={10}>
            10
          </option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
      </div>

      <button>search</button>
    </form>
  );
}
