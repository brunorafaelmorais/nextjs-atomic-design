import { useState, useEffect } from 'react';

import Storage from '@/shared/infra/services/storage';

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const storageValue = Storage.get(key);

    if (storageValue) {
      setState(JSON.parse(storageValue));
    }
  }, [key]);

  useEffect(() => {
    Storage.set(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
