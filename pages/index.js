import { useEffect, useState } from "react";

export default () => {
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    let b = new AbortController();
    const fetchData = async () => {
      try {
        let res = await fetch("/api", { signal: b.signal }).then((res) =>
          res.json()
        );
        setUserName(res.name);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();

    return () => {
      b.abort();
    };
  }, []);

  useEffect(() => setGreeting(`Hola ${userName}`), [userName]);

  return <>{greeting}</>;
};
