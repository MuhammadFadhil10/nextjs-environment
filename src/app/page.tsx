import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next js environment</h1>

      <h1>this is {process.env.NODE_ENV} environment</h1>
    </main>
  );
}
