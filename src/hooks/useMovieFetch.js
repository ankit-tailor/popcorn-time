import axios from "axios";
import { useEffect, useState } from "react";
import { API, baseUrl } from "../backend";

const useMovieFetch = (movieId) => {
  const [data, setData] = useState(null);
  const [actor, setActor] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const getMovie = await axios.get(
        `${baseUrl}/movie/${movieId}?api_key=${API}`
      );
      const getActors = await axios.get(
        `${baseUrl}/movie/${movieId}/credits?api_key=${API}`
      );
      const getRecommendations = await axios.get(
        `${baseUrl}/movie/${movieId}/recommendations?api_key=${API}`
      );
      const { data } = getMovie;
      const { data: actor } = getActors;
      const { data: recommendations } = getRecommendations;
      setData(data);
      setActor(actor);
      setRecommendations(recommendations);
      setLoading(false);
      //   console.log(data);
    })();
  }, [movieId]);
  return { data, actor, recommendations, loading };
};

export default useMovieFetch;
