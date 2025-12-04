import { GET_TOP_DEBTS } from '@customConfig/api';
import axiosInstance from '@customConfig/customAxios';
import { DebtsType } from '@customTypes/DebtsType';
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import useAppStateContext from './useAppStateContext';

const useDebtsList = () => {
  const { items, setItems, loading, setLoading } = useAppStateContext();

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(GET_TOP_DEBTS).then((response: AxiosResponse<DebtsType[]>) => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  return {
    items,
    loading,
  };
};

export default useDebtsList;
