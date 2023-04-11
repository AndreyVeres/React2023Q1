import { FilterValues } from 'components/filter/Filter';
import { useEffect, useState } from 'react';
import { ICard } from 'types/types';

export default function useFetch({ searchQuery, pageSize }: FilterValues) {
  const [data, setData] = useState<ICard[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setLoading(true);
      const url = `https://api.magicthegathering.io/v1/cards?page=1&pageSize=${pageSize}&name=${searchQuery}&contains=imageUrl`;
      fetch(url)
        .then((res) => {
          const total = res.headers.get('total-count');
          if (total) {
            setTotalCount(+total);
          }
          return res.json();
        })
        .then((data) => setData(data.cards))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };

    getData();
  }, [pageSize, searchQuery]);

  return { data, loading, error, totalCount };
}
