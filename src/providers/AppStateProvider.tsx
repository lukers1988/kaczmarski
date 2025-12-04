import { useMemo, useState } from 'react';
import type { DebtsType } from '../types/DebtsType';
import AppStateContext from '@customContexts/AppStateContext';
import AppStateProviderProps from '@customInterfaces/AppStateProviderProps';

const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [items, setItems] = useState<DebtsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      items,
      setItems,
      loading,
      setLoading,
    }),
    [items, loading],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export default AppStateProvider;
