import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIndex, isEmpty, map } from 'ramda';
import { DraggableEventHandler } from 'react-draggable';
import { Positions, User } from '../../redux/stateTypes';
import { Calls } from '../CallCard/CallTypes';
import { getSize } from './CallsHelper';

function useCalls({ containerElementRef }: {
  containerElementRef: React.MutableRefObject<HTMLDivElement | null>
}) {
  const [calls, setCalls] = useState<Calls>([]);
  const [count, setCount] = useState<number>(0);
  const selectHeight = () => containerElementRef?.current?.clientHeight || 300;
  const selectWidth = () => containerElementRef?.current?.clientWidth || 300;
  const containerHeight = useMemo(selectHeight, [containerElementRef?.current?.clientHeight]);
  const containerWidth = useMemo(selectWidth, [containerElementRef?.current?.clientWidth]);
  const [size, setSize] = useState<{ width: number, height: number }>({ width: 100, height: 100 });
  const users = useSelector<{ users: Calls }, Calls>((state) => state.users);
  const positions = useSelector<{ positions: Positions }, Positions>((state) => state.positions);
  const dispatch = useDispatch();

  useEffect(() => {
    const newSize = getSize({
      itemCount: count,
      parentSize: { width: containerWidth, height: containerHeight },
    });
    setSize(newSize);
  }, [containerWidth, containerHeight, count]);
  useEffect(() => {
    if (isEmpty(users)) {
      setCalls([]);
      setCount(0);
    } else {
      const mapIndex = addIndex<User>(map);
      const newCalls: Calls = mapIndex((val, id) => ({ ...val, id }), users);
      setCalls(newCalls);
      setCount(users.length);
    }
  }, [users]);

  const onStart = () => { };

  const onStop: DraggableEventHandler = (event, data) => {
    const { x, y, node } = data;
    const { id } = node.dataset;
    if (id) {
      dispatch({ type: 'ADD_POS', position: { x, y, id } });
    }
  };

  const calculatePosition = (id: number | string) => {
    const { x, y } = positions.find((i) => i.id === `${id}`) || { x: 0, y: 0 };
    return { x, y };
  };

  // For controlled component
  const adjustXPos = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const adjustYPos = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return {
    count,
    calls,
    onStart,
    onStop,
    adjustXPos,
    adjustYPos,
    positions,
    calculatePosition,
    width: size.width,
    height: size.height,
  };
}

export default useCalls;
