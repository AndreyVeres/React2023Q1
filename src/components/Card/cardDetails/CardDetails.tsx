import React from 'react';
import { ICard } from 'types/types';
import { getManaIcons, replaceText } from 'utils/getManaIcons';

import styles from './cardDetails.module.scss';

export function CardDetails({
  imageUrl,
  name,
  type,
  originalText,
  flavor,
  power,
  toughness,
  manaCost,
  id,
  artist,
}: ICard) {
  return (
    <>
      <div key={id + originalText} className={styles.cardDetails}>
        <img className={styles.img} src={imageUrl} alt="image" />
        <div className={styles.cardInfo}>
          <h2 data-testId="name" className={styles.border}>
            {name}
          </h2>
          <div className={styles.border}>{getManaIcons(manaCost || '')}</div>
          <p className={styles.border}>{type}</p>
          {power && toughness && (
            <p className={styles.border}>
              {power} / {toughness}
            </p>
          )}
          <div className={styles.info}>{replaceText(originalText)}</div>

          <p className={styles.flavor}>{flavor}</p>
          <p>Illustrated by: {artist}</p>
        </div>
      </div>
    </>
  );
}
