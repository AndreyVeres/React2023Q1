import React, { Suspense, useState } from 'react';
import { Filter } from 'components/filter/Filter';
import { CardThumbnail } from 'components/Card/cardThumbnail/CardThumbnail';
import { Spinner } from 'components/UI/spinner/Spinner';
import styles from './productsList.module.scss';

import { useFetchCardsQuery } from 'service/mtgService';
import { IFilterState } from 'store/filterReducer/filterReducer';

export function ProductsList() {
  const [searchParams, setSearchParams] = useState<IFilterState>({} as IFilterState);
  const { data, isFetching, isError } = useFetchCardsQuery(searchParams);

  const searchHandler = (params: IFilterState) => {
    setSearchParams(params);
  };

  if (isFetching)
    return (
      <>
        <Filter searchHandler={searchHandler} />
        <Spinner />
        <p>Это может занять некоторе время...</p>
      </>
    );

  if (isError)
    return (
      <div>
        Произошла ошибка. Иногда апишка ведет себя очень странно или вообще лежит, попробуйте
        обновить страницу или попробуйте позже
      </div>
    );

  return (
    <>
      <Filter searchHandler={searchHandler} />
      <h2 className={styles.total}>Всего результатов:{data && data.total}</h2>

      {data && data?.cards.length > 0 ? (
        <ul className={styles.cards}>
          {data?.cards.map((card) => (
            <CardThumbnail key={card.id} {...card} />
          ))}
        </ul>
      ) : (
        <div>По вашему запросу не найдено карт </div>
      )}
    </>
  );
}
