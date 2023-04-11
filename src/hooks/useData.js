import { useEffect, useState } from "react";

function useData(url, callServerFunction) {
    const [data, setData] = useState(null);
    useEffect(() => {
      if (url) {
        let ignore = false;
        callServerFunction(new Request(url))
          .then(response => response.json())
          .then(json => {
            if (!ignore) {
              setData(json);
            }
          });
        return () => {
          ignore = true;
        };
      }
    }, [url]);
    return data;
  }

export default useData;
