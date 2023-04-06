import React, { ReactNode } from 'react';

interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

import styles from './modal.module.scss';

export function Modal({ isOpen, children, setIsOpen }: IModalProps) {
  return (
    <>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className={styles.background}>
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      )}
    </>
  );
}
