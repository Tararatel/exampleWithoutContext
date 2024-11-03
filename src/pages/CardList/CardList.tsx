import React from 'react';
import type { CardType } from 'src/types/types';
import Card from 'src/components/Card/Card';
import styles from './CardList.module.scss';

type CardListProps = {
  cards: CardType[];
};

function CardList({ cards }: CardListProps): JSX.Element {
  return (
    <div>
      <h1 className={styles.title}>Card List</h1>
      <div className={styles.wrapper}>
      	{cards.length > 0 ? (
	        cards.map((card) => <Card key={card.id} card={card} />)
	      ) : (
	        <p>No cards available</p>
	      )}
      </div>
    </div>
  );
}

export default CardList;
