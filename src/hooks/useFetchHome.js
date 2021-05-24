import { useEffect, useState } from "react";
import { API, baseUrl } from "../backend";
import axios from "axios";
const useFetchHome = (endPointUrl, page_no) => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bannerInfo, setBannerInfo] = useState({
    title: "",
    release_date: "",
    backdrop_path: "",
  });
  // console.log(API);
  useEffect(() => {
    (async () => {
      setLoading(true);
      let trendingMovies = await axios.get(`${baseUrl}${endPointUrl}`, {
        params: {
          api_key: API,
          page: page_no,
        },
      });
      const {
        data: { results, total_pages },
      } = trendingMovies;
      let { backdrop_path, title, release_date, id } =
        results[Math.floor(Math.random() * 20)];
      setData(results);
      setTotalPages(total_pages);
      setBannerInfo({
        title,
        release_date,
        backdrop_path,
        id,
      });
      setLoading(false);
    })();
  }, [endPointUrl, page_no]);
  return {
    data,
    bannerInfo,
    totalPages,
    loading,
  };
};

export default useFetchHome;
