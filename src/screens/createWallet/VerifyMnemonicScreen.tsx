import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  SimpleGrid,
  Tag,
  Text,
} from '@chakra-ui/react';
import { D } from '@mobily/ts-belt';

import BackButton from '../../components/BackButton';
import getRandomIndexes from '../../utils/getRandomIndexes';

import { useWalletCreation } from './WalletCreationContext';

type DraggableItem = {
  word: string;
  index: number;
};

type SlotIndex = number | 'bank';

type Slots = {
  bank: number[];
  [key: number]: number | null;
};

function VerifyMnemonicScreen(): JSX.Element {
  const ctx = useWalletCreation();
  const navigate = useNavigate();

  const words = useMemo(() => ctx.mnemonic.split(' '), [ctx.mnemonic]);
  const [indexesToCheck, setIndexesToCheck] = useState<number[]>([]);
  const [slots, setSlots] = useState<Slots>(
    indexesToCheck.reduce((acc, nextId) => ({ ...acc, [nextId]: null }), {
      bank: [],
    } as Slots)
  );

  useEffect(() => {
    if (words.length < 12) {
      navigate('/');
    } else {
      const selectedWords = getRandomIndexes(words, 4);
      setIndexesToCheck(selectedWords);
      setSlots({ bank: selectedWords });
    }
  }, [words, navigate]);

  const moveWord = (wordIndex: number, to: SlotIndex, from: SlotIndex) => {
    if (to === from) return;
    if (to === 'bank') {
      if (from === 'bank') return;
      // Back to bank
      setSlots((prev) => ({
        ...D.deleteKey(prev, from),
        bank: [...prev.bank, wordIndex],
      }));
    } else {
      setSlots((prev) => {
        // Move to slot
        const existingWord = prev[to];
        const addWord = typeof existingWord === 'number' ? [existingWord] : [];
        return {
          ...prev,
          [to]: wordIndex,
          [from]:
            from === 'bank'
              ? [...prev.bank.filter((x) => x !== wordIndex), ...addWord]
              : existingWord ?? null,
        } as Slots;
      });
    }
  };

  const placeWord = (wordIndex: number, from: SlotIndex) => {
    if (from === 'bank') {
      const occupiedSlots = Object.keys(slots);
      const freeSlots = indexesToCheck
        .sort((a, b) => a - b)
        .filter((k) => !occupiedSlots.includes(String(k)));
      const nextFreeSlot = freeSlots[0];
      if (!nextFreeSlot) {
        throw new Error('Cannot find next empty slot');
      }
      return moveWord(wordIndex, nextFreeSlot, from);
    }
    return moveWord(wordIndex, 'bank', from);
  };

  const allWordsPlaced =
    slots.bank.length === 0 &&
    Object.entries(slots)
      .filter(([k]) => k !== 'bank')
      .every(([k, v]) => parseInt(k, 10) === v);

  return (
    <>
      <BackButton />
      <Text fontSize="lg" mb={4}>
        Let&apos;s verify that you have written down your seed phrase and will
        able to recover your accounts/funds later if needed.
      </Text>
      <DndProvider backend={HTML5Backend}>
        <Card fontSize="sm" margin={[4, null]} borderRadius="xl" w="100%">
          <CardHeader pb={0}>
            <Text mb={2}>Please, place the missing words on their places:</Text>
            {slots.bank.map((wordIndex) => (
              <DraggableTag
                key={`word_${words[wordIndex]}}`}
                word={words[wordIndex] ?? ''}
                index={wordIndex}
                from="bank"
                moveWord={moveWord}
                placeWord={placeWord}
              />
            ))}
          </CardHeader>
          <CardBody>
            <SimpleGrid columns={[2, null, 3]} spacing="10px">
              {words.map((word, idx) => {
                const isSlot = indexesToCheck.includes(idx);
                if (isSlot) {
                  const placedWord = slots[idx];
                  return (
                    <DroppableBox
                      // eslint-disable-next-line react/no-array-index-key
                      key={`droppable_${word}_${
                        placedWord ? 'filled' : 'empty'
                      }`}
                      slot={idx}
                      hasWordInside={!!placedWord}
                    >
                      {placedWord !== null && placedWord !== undefined ? (
                        <DraggableTag
                          key={`word_${words[placedWord]}`}
                          word={words[placedWord] ?? ''}
                          index={placedWord}
                          from={idx}
                          moveWord={moveWord}
                          placeWord={placeWord}
                          full
                        />
                      ) : (
                        <Text as="span" fontSize="xx-small">
                          {idx + 1}.{' '}
                        </Text>
                      )}
                    </DroppableBox>
                  );
                }
                return (
                  <Box
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${idx}_${word}`}
                    borderRadius="md"
                    borderWidth={1}
                    borderColor="whiteAlpha.800"
                    bg={isSlot ? 'blackAlpha.50' : 'whiteAlpha.50'}
                    _hover={
                      isSlot ? { background: 'blackAlpha.300' } : undefined
                    }
                    p={2}
                  >
                    <Text as="span" fontSize="xx-small">
                      {idx + 1}.{' '}
                    </Text>
                    {word}
                  </Box>
                );
              })}
            </SimpleGrid>
          </CardBody>
        </Card>
      </DndProvider>
      <Button
        isDisabled={!allWordsPlaced}
        onClick={() => {
          navigate('/create/set-password');
        }}
      >
        Next step
      </Button>
    </>
  );
}

type DraggableTagProps = {
  moveWord: (wordIndex: number, slot: SlotIndex, from: SlotIndex) => void;
  placeWord: (wordIndex: number, from: SlotIndex) => void;
  from: SlotIndex;
  full?: boolean;
} & DraggableItem;

// Sub components
function DraggableTag({
  word,
  index,
  moveWord,
  placeWord,
  from,
  full = false,
}: DraggableTagProps): JSX.Element {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'word',
    item: { word, index },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ slot: SlotIndex }>();
      if (item && dropResult) {
        moveWord(item.index, dropResult.slot, from);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const fullStyles = full
    ? {
        display: 'block',
        width: '100%',
        height: '100%',
        p: 2,
      }
    : {
        p: 2,
        m: 1,
      };

  return (
    <Tag
      ref={dragRef}
      colorScheme="purple"
      cursor={isDragging ? 'grabbing' : 'grab'}
      opacity={isDragging ? 0.5 : 1}
      userSelect="none"
      fontSize="md"
      onClick={() => placeWord(index, from)}
      {...fullStyles}
    >
      {full && typeof from === 'number' && (
        <Text as="span" fontSize="xx-small">
          {from + 1}.{' '}
        </Text>
      )}
      {word}
    </Tag>
  );
}

type DroppableBoxProps = PropsWithChildren<{
  slot: SlotIndex;
  hasWordInside: boolean;
}>;

function DroppableBox({
  slot,
  children = '',
  hasWordInside,
}: DroppableBoxProps): JSX.Element {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'word',
    drop: () => ({ slot }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <Box
      ref={dropRef}
      borderRadius="md"
      borderWidth={1}
      borderColor="gray.200"
      bg={isOver ? 'blackAlpha.700' : 'blackAlpha.50'}
      p={hasWordInside ? 0 : 2}
    >
      {children}
    </Box>
  );
}

export default VerifyMnemonicScreen;
