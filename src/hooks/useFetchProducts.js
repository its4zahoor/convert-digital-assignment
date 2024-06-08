import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

const API_URL = "https://dummyjson.com/products/search";

export const useFetchProducts = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const q = useDebounce(query, 1000);

  const reset = useCallback(() => {
    setData([]);
    setLoading(false);
    setError("");
  }, []);

  const getData = useCallback(async () => {
    setLoading(true);
    setData([]);
    setError("");
    try {
      const res = await fetch(`${API_URL}?q=${q}&limit=6`);
      const json = await res.json();
      setData(json.products);
      setLoading(false);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [q]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error, reset };
};
