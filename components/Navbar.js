import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <style jsx>
        {`
          nav {
            width: 100%;
            padding: 1rem 0;
            background: #eee;
          }
          .main-ul,
          nav ul {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            gap: 1.5rem;
          }
          nav ul li {
            list-style: none;
            font-weight: 600;
          }
        `}
      </style>

      <nav>
        <ul className="container main-ul">
          <li>
            <Link href="/">
              <a>
                <h2>Blogs</h2>
              </a>
            </Link>
          </li>
          <li>
            <ul>
              <Link href="/">
                <a>
                  <li>Home</li>
                </a>
              </Link>

              <Link href="/about">
                <a>
                  <li>About</li>
                </a>
              </Link>

              <Link href="/contact">
                <a>
                  <li>Contact Me</li>
                </a>
              </Link>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};
