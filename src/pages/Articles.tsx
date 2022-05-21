import React, { FC, useEffect, useState } from 'react';
import { api } from '../constants';

export const Articles: FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getFetchArticles = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error('not ok');
      }
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchArticles();
  }, []);

  return (
    <>
      <h2>Articles</h2>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              {article.title}{' '}
              <img style={{ width: '600px' }} src={article.imageUrl} alt="" />
            </li>
          ))}
        </ul>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={() => getFetchArticles()}>reload</button>
    </>
  );
};
