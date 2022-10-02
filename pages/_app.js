import { Navbar } from "../components/Navbar";
import styles from "../styles/App.module.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.section + " container"}>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
