import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import useDebtsList from './useDebtsList';
import AppStateContext from '@customContexts/AppStateContext';

// Mock axiosInstance
const getMock = vi.fn();
vi.mock('@customConfig/customAxios', () => ({
  default: {
    get: getMock,
  },
}));

// Mock API endpoint
vi.mock('@customConfig/api', () => ({
  GET_TOP_DEBTS: '/top-debts',
}));

describe('useDebtsList hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches top debts on mount and updates context', async () => {
    const mockData = [{ id: 1, name: 'Debt 1' }];
    getMock.mockResolvedValue({ data: mockData });

    const setItemsMock = vi.fn();
    const setLoadingMock = vi.fn();
    const mockContextValue = {
      items: [],
      setItems: setItemsMock,
      loading: false,
      setLoading: setLoadingMock,
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AppStateContext.Provider value={mockContextValue}>{children}</AppStateContext.Provider>
    );

    const { result } = renderHook(() => useDebtsList(), { wrapper });

    expect(result.current.loading).toBe(false);

    expect(setLoadingMock).toHaveBeenCalledWith(true);

    await act(async () => {
      await getMock.mock.results[0].value;
    });

    expect(setItemsMock).toHaveBeenCalledWith(mockData);
    expect(setLoadingMock).toHaveBeenCalledWith(false);
  });
});
