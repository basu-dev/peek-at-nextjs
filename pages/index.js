import { useEffect, useState } from "react";
export default () => {
  const [userName, setUserName] = useState("basu");
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    let a = new AbortController();
    const fetchData = async () => {
      try {
        let res = await fetch("/api", { signal: a.signal }).then((res) =>
          res.json()
        );
        setUserName(res.name);
      } catch (e) {}
    };
    fetchData();

    return () => {
      a.abort();
    };
  }, []);

  useEffect(() => setGreeting(`Hola ${userName}`), [userName]);

  return (
    <>
      <div>{greeting}</div>
    </>
  );
};
