import { ChangeEvent, useState } from 'react';
import type { AxiosResponse } from 'axios';
import useAppStateContext from '@customHooks/useAppStateContext';
import axiosInstance from '@customConfig/customAxios';
import type { DebtsType } from '@customTypes/DebtsType';
import { GET_FILTERED_DEBTS, GET_TOP_DEBTS } from '@customConfig/api';

const useHeader = () => {
  const [filter, setFilter] = useState<string>('');
  const { setItems, loading, setLoading } = useAppStateContext();

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const getFilteredDebts = () => {
    setLoading(true);
    axiosInstance
      .post(GET_FILTERED_DEBTS, {
        phrase: filter,
      })
      .then((response: AxiosResponse<DebtsType[]>) => {
        setItems(response.data);
        setLoading(false);
      });
  };

  const getTopDebts = () => {
    setLoading(true);
    axiosInstance.get(GET_TOP_DEBTS).then((response: AxiosResponse<DebtsType[]>) => {
      setItems(response.data);
      setLoading(false);
    });
  };

  const handleFilterButtonClick = () => {
    setItems([]);
    if (filter.length > 0) {
      getFilteredDebts();
    } else {
      getTopDebts();
    }
  };

  return {
    loading,
    handleFilterChange,
    handleFilterButtonClick,
  };
};

export default useHeader;
