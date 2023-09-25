import { useState, useEffect, memo } from "react";

const useFetch = (url: string, initialState: null) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
