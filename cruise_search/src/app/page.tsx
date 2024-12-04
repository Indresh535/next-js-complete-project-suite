"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Home() {
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <div>
hello
       </div>

        <div className={styles.ctas}>
        <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
        </div>
      </main>
      <footer className={styles.footer}>
       <div></div>
      </footer>
    </div>
  );
}
