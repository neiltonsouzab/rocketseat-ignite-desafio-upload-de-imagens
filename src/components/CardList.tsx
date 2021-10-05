import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [imgURL, setImgURL] = useState('');

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  function handleShowViewImage(url: string): void {
    setImgURL(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid gridTemplateColumns="repeat(3, 1fr)" gap="40px">
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={url => handleShowViewImage(url)}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgURL} />
    </>
  );
}
