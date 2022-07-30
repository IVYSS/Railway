import Banner from "../components/home/banner/Banner";
import Navbar from "../components/navbar/navbar";
import styles from "../styles/Home.module.css";
import Reac, { useState } from "react";

export default function Home() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <div className={styles.first_content}>
        <Banner></Banner>
      </div>
    </div>
  );
}
