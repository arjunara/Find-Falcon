import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setFetchedData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const callApi = async () => {
      try {
        const apiResponse = await fetch(url);
        if (apiResponse.ok && apiResponse.status === 200) {
          const jsonData = await apiResponse.json();
          console.log('----', jsonData)
          setFetchedData(jsonData);
        }
      } catch (err) {
        setError(err.message);
      }
    };
    callApi();
  }, [url]);

  return { data, error };
};

export default useFetch;
