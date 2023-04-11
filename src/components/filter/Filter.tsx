import React, { useEffect, useRef } from 'react';
import { useInput } from 'hooks/useInput';
import { useForm } from 'react-hook-form';

import styles from './filter.module.scss';

interface IFilterProps {
  filters: FilterValues;
  setFilters: React.Dispatch<React.SetStateAction<FilterValues>>;
}

export type FilterValues = {
  searchQuery: string;
  pageSize: number;
};

export function Filter({ filters, setFilters }: IFilterProps) {
  const searchInput = useInput(filters.searchQuery);
  const currentValue = useRef<string>();
  const { register, handleSubmit } = useForm<FilterValues>();

  const onSearch = (filters: FilterValues) => {
    setFilters(filters);
  };

  useEffect(() => {
    currentValue.current = searchInput.value;
  }, [searchInput.value]);

  useEffect(() => {
    return () => {
      if (currentValue.current !== undefined)
        localStorage.setItem('searchQuery', currentValue.current);
    };
  }, []);

  return (
    <form className={styles.filter} role="search" onSubmit={handleSubmit(onSearch)}>
      <div className={styles.item}>
        <label htmlFor="searchQuery">Card name</label>
        <input
          id="searchQuery"
          {...searchInput}
          {...register('searchQuery')}
          data-testid="search"
        />
      </div>

      <div className={styles.item}>
        <label htmlFor="pageLimit">page size</label>
        <select {...register('pageSize')} name="pageSize" id="pageSize">
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
