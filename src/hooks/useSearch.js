import axios from "axios";
import { useEffect, useState } from "react";
import { API, baseUrl } from "../backend";

const useSearch = (query, page_no) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      if (query !== "") {
        setLoading(true);
        setError(false);
      }
      const searchResult = await axios.get(`${baseUrl}/search/movie`, {
        params: {
          api_key: API,
          query: query,
          include_adult: true,
          page: page_no,
        },
      });
      if (searchResult) {
        setLoading(false);
      }
      const {
        data: { results },
      } = searchResult;
      console.log(results);
      setData(results);
    })();
  }, [query]);

  return {
    data,
    loading,
  };
};

export default useSearch;
