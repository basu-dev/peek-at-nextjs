import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Blog.module.css";
import { getBlogs } from "./api/blogs";

export default ({ data }) => {
  const [blogs, setBlogs] = useState(data);

  return (
    <>
      <h1 className="mb-4">Blogs</h1>
      <div className={styles.blogs}>
        {blogs.map((blog) => (
          <div className={styles.blog} key={blog.slug}>
            <Link href={`blogs/${blog.slug}`}>
              <a className="hover-underline">
                <h3 className="mb-3">{blog.title}</h3>
              </a>
            </Link>
            <p>{blog.content.slice(0, 200)}...</p>

            <div className="mt-3">
              Written By: <b>{blog.author}</b> on <b>{blog.date}</b>
            </div>
            <hr className="mb-3 mt-3" />
          </div>
        ))}
      </div>
    </>
  );
};

// export async function getServerSideProps(context) {
//   try {
//     let res = await fetch("http://localhost:3000/api/blogs").then((res) =>
//       res.json()
//     );
//     return {
//       props: { data: res },
//     };
//   } catch (e) {
//     return { props: { data: [] } };
//   }
// }

export async function getStaticProps() {
  try {
    let res = await getBlogs();
    return {
      props: { data: res },
    };
  } catch (e) {
    return { props: { data: [] } };
  }
}
