/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState } from 'react';
import type { Card } from './CallTypes';

function useCard({ id, count }: { id: number; count: number }) {
  const initialState = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  };
  const [state, setState] = useState<Card>(initialState);

  useEffect(() => {
    const width = 0;
    const height = 0;
    const top = getTop();
    const left = getLeft();
    setState({
      width, height, top, left,
    });
  }, [count]);

  function getTop() {
    return id * count;
  }
  function getLeft() {
    return id * count;
  }

  return state;
}

export default useCard;
