import { Dispatch, SetStateAction } from 'react';
import { DebtsType } from '../types/DebtsType';

interface AppStateContextInterface {
  items: DebtsType[];
  setItems: Dispatch<SetStateAction<DebtsType[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default AppStateContextInterface;
