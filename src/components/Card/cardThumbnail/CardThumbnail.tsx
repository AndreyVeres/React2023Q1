import React, { useState } from 'react';
import { Modal, CardDetails } from 'components';
import { ICard } from 'types/types';

import styles from './cardThumbnail.module.scss';

export function CardThumbnail(card: ICard) {
  const [showModal, setShowModal] = useState(false);
  const { imageUrl, name, flavor, type } = card;

  return (
    <>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <CardDetails key={card.id + imageUrl} {...card} />
      </Modal>

      <li className={styles.card}>
        <img
          onClick={() => setShowModal(true)}
          className={styles.img}
          src={imageUrl}
          alt={'image not found'}
        />
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{flavor}</p>
      </li>
    </>
  );
}
