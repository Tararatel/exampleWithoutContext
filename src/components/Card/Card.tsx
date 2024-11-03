import React from 'react';
import type { CardType } from 'src/types/types';
import styles from './Card.module.scss';

type CardProps = {
  card: CardType;
};

function Card({ card }: CardProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2>{card.title}</h2>
      <p>{card.content}</p>
    </div>
  );
}

export default Card;
