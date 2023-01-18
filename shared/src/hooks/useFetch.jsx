import { useEffect, useRef, useState } from "react";
import { http } from "../constants";
import axios from "axios";

export const useFetch = (url) => {
   const [loading, setLoading] = useState(null);
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const source = axios.CancelToken.source();

   useEffect(() => {
      setLoading(true);
      setError(null);

      if (!url) return;

      http
         .get(url, {
            cancelToken: source.token,
         })
         .then((response) => {
            setLoading(false);
            setData(response?.data);
         })
         .catch((error) => {
            setLoading(false);
            setError(error);
         });

      return () => {
         source.cancel();
      };
   }, [url]);

   return { loading, data, error };
};
