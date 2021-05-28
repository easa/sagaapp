import { useEffect, useState } from 'react';
import users from '../../helpers/users';
import { Calls } from './call.types';

function useCalls(numberOfCards: number) {
  const [calls, setCalls] = useState<Calls>([]);
  useEffect(() => {
    // TODO: read from saga app
    setCalls(users(numberOfCards));
  }, []);
  return {
    calls,
  };
}

export default useCalls;
