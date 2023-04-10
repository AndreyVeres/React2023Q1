import React, { useState } from 'react';
import { Filter, FilterValues } from 'components/filter/Filter';
import { CardThumbnail } from 'components/Card/cardThumbnail/CardThumbnail';
import useFetch from 'hooks/useFetch';
import { Spinner } from 'components/UI/spinner/Spinner';

import styles from './productsList.module.scss';

export function ProductsList() {
  const [filters, setFilters] = useState<FilterValues>({
    searchQuery: localStorage.getItem('searchQuery') || '',
    pageSize: 10,
  });
  const { data, loading, error, totalCount } = useFetch(filters);

  return (
    <>
      <Filter filters={filters} setFilters={setFilters} />
      <h2 className={styles.total}>Всего результатов:{totalCount}</h2>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div>
          Произошла ошибка. Иногда апишка ведет себя очень странно или вообще лежит, попробуйте
          обновить страницу или попробуйте позже
        </div>
      ) : data?.length ? (
        <>
          <ul className={styles.cards}>
            {data?.map((card) => (
              <CardThumbnail key={card.id} {...card} />
            ))}
          </ul>
        </>
      ) : (
        <div>not found cards</div>
      )}
    </>
  );
}
