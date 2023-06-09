import type { NextPage } from "next";
import { Tiptap } from "../components/Tiptap";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Tiptap />
    </div>
  );
};

export default Home;
