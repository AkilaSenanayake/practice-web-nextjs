import Link from 'next/link'
import React from 'react'
import styles from "./service.module.css";

function page() {
  return (
    <>
    <div><h1>Service page</h1></div>
    <br></br>
    <p><Link href="/" className={styles.link}>Back to Home</Link></p>
    </>
    
  )
}

export default page