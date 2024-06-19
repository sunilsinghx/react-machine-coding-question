/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { useState } from "react";

function useFetch(URL ) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {

        try {
            setLoading(true)
            const res = await fetch(URL)
            const data = await res.json()
            setResponse(data)

        } catch (error) {
            setError(error.message)
        }finally
        {
            setLoading(false)
        }

      };
      getData()
  }, [URL]);

  return {response,loading,error}
}

export default useFetch;
