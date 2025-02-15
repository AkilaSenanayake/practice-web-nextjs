// import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Home page</h1>
    <br></br>

    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/service">Services</Link></li>
      <li><Link href="/products">Products</Link></li>
      <li><Link href="/about/branches">About</Link></li>
      <li>Contact</li>
      <li>Login</li>
    </ul>
    </>
    
  );
}
