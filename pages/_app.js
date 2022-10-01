import { Navbar } from "../components/Navbar";
import styles from "../styles/App.module.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className={styles.main + " container"}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
