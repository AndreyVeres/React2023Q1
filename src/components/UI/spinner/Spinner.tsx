import React from 'react';

import styles from './spinner.module.scss';

export function Spinner() {
  return <div role={'progressbar'} className={styles.spinner}></div>;
}
