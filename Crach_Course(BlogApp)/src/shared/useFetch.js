import { useState, useEffect } from "react";

// custom hooks need to start word "use" otherwise they will be ignored
const useFetch = (url) => {
  const [data, setData] = useState(null);

  //   const [name, setName] = useState("Shalitha");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // console.log("useEffect");
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("res.statusText");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          //   console.log(err.message);
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
  // whenever useFetch is called, it will re-run the effect

  return { data, isLoading, error };
};

export default useFetch;
