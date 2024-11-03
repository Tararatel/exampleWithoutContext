import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'src/Layout';
import CardList from 'src/pages/CardList/CardList';
import AddPost from 'src/pages/AddPost/AddPost';
import NotFound from 'src/pages/NotFound/NotFound';
import type { CardType } from 'src/types/types';

function App(): JSX.Element {
  const [cards, setCards] = useState<CardType[]>(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards
      ? (JSON.parse(savedCards) as CardType[])
      : [
          { id: 1, title: 'Card 1', content: 'This is the first card' },
          { id: 2, title: 'Card 2', content: 'This is the second card' },
        ];
  });

  const addPost = (title: string, content: string): void => {
    const newCard = { id: Date.now(), title, content };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <CardList cards={cards} /> },
        { path: 'add-post', element: <AddPost onAdd={addPost} /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
