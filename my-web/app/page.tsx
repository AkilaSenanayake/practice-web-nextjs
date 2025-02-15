// import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <h1>Home page</h1>
    <br></br>

    <ul>
      <li><Link href="/" className={styles.link}>Home</Link></li>
      <li><Link href="/service" className={styles.link}>Services</Link></li>
      <li><Link href="/products" className={styles.link}>Products</Link></li>
      <li><Link href="/about/branches" className={styles.link}>About</Link></li>
      <li>Contact</li>
      <li>Login</li>
    </ul>

    <br></br>

    <Link href="https://www.w3schools.com/typescript/" target="_blank" id={styles.specialLink}>Learn Typescript</Link>
    </>
    
  );
}
