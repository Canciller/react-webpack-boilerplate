import React from 'react';
import styles from './HelloWorld.module.scss'

export default function HelloWorld() {
  return (
    <p
      className={styles.root}
    >Hello, World!</p>
  )
}