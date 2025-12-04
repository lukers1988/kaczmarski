import AppStateContext from '@customContexts/AppStateContext';
import { useContext } from 'react';

const useAppStateContext = () => {
  const ctx = useContext(AppStateContext);

  return ctx;
};

export default useAppStateContext;
