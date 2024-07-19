import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [apiUrl, setApiUrl] = useState(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  let [data, setData] = useState({});
  useEffect(() => {
    const fetchDataFromApi = async () => {
      let response = await fetch(apiUrl);
      if (response.ok) {
        setData(await response.json());
      }
    };
    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h2>Use Effect Hook</h2>
      <p>userId: {data.userId}</p>
      <p>Title: {data.title}</p>
    </div>
  );
};

export default UseEffectHook;
