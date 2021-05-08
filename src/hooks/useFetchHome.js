import { useEffect, useState } from "react";
import { API, baseUrl } from "../backend";
import axios from "axios";
const useFetchHome = (endPointUrl) => {
  const [data, setData] = useState([]);
  const [bannerInfo, setBannerInfo] = useState({
    title: "",
    release_date: "",
    backdrop_path: "",
  });
  useEffect(() => {
    (async () => {
      let trendingMovies = await axios.get(`${baseUrl}${endPointUrl}`, {
        params: {
          api_key: API,
        },
      });
      const {
        data: { results },
      } = trendingMovies;
      let { backdrop_path, title, release_date } = results[
        Math.floor(Math.random() * 20)
      ];
      setData(results);
      setBannerInfo({
        title,
        release_date,
        backdrop_path,
      });
    })();
  }, [endPointUrl]);
  return {
    data,
    bannerInfo,
  };
};

export default useFetchHome;
