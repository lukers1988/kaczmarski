import { createContext } from 'react';
import { Dispatch, SetStateAction } from 'react';
import AppStateContextInterface from '@customInterfaces/AppStateContextInterface';

const defaultAppState: AppStateContextInterface = {
  items: [],
  setItems: (() => {}) as Dispatch<SetStateAction<any>>,
  loading: false,
  setLoading: (() => {}) as Dispatch<SetStateAction<boolean>>,
};

const AppStateContext = createContext<AppStateContextInterface>(defaultAppState);

export default AppStateContext;
