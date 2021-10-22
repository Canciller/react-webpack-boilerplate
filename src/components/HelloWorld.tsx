import React from 'react';
import helloWorld from '~/utils/helloWorld';
import styles from './HelloWorld.module.scss';

export default function HelloWorld() {
  return <p className={styles.root}>{helloWorld()}</p>;
}
