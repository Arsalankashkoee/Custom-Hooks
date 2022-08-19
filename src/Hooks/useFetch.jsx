import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setError(null);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setData(null);
        setError(err.message);
      });
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
