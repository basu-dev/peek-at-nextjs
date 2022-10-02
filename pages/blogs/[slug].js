import { useState } from "react";

export default (props) => {
  const [blog, setBlog] = useState(props.res);

  return (
    <>
      {blog && (
        <>
          <h1 className="mb-3">{blog.title}</h1>
          <p>{blog.content}</p>
          <div className="mt-3">
            Written By: <b>{blog.author}</b> on <b>{blog.date}</b>
          </div>
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    let res = await fetch(
      "http://localhost:3000/api/blogs/" + context.query.slug
    ).then((res) => res.json());
    return {
      props: { res },
    };
  } catch (e) {
    return { props: { res: "" } };
  }
}
