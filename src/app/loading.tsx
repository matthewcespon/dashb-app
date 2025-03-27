"use client"

import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className={styles.container}>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
