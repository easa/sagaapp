import { useState } from 'react';

function useAction() {
  // TODO: read item from saga state
  const [items, setItems] = useState<string[]>([]);
  const onClick = function clickHandler() {
    const newItem = '';
    setItems([...items, newItem]);
  };
  return {
    onClick,
  };
}

export default useAction;
