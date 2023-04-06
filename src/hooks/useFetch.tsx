import { useState } from 'react';
import { ICard } from 'types/types';

export default function useFetch() {
  const [data, setData] = useState<ICard[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getData = async (url: string): Promise<void> => {
    setLoading(true);
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

  return { data, loading, error, getData, totalCount };
}
