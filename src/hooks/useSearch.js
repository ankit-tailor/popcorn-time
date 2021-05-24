import axios from "axios";
import { useEffect, useState } from "react";
import { API, baseUrl } from "../backend";

const useSearch = (query, page_no) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, settotalPages] = useState(0);

  useEffect(() => {
    (async () => {
      if (query !== "") {
        setLoading(true);
        setError(false);
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
          data: { results, total_pages },
        } = searchResult;
        // console.log(results);
        // console.log(searchResult.data);
        setData(results);
        settotalPages(total_pages);
      }
    })();
  }, [query, page_no]);

  return {
    data,
    loading,
    error,
    totalPages,
  };
};

export default useSearch;
