import { useEffect, useState } from "react";

function useData(url, callServer) {
    const [data, setData] = useState(null);
    useEffect(() => {
        callServer(new Request(url))
          .then(response => response.json())
          .then(json => {
              setData(json);
          });
    }, [url]);
    return data;
  }

export default useData;
