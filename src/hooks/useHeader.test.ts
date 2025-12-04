import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import useHeader from './useHeader';

// Mock useAppStateContext
const setItemsMock = vi.fn();
vi.mock('@customHooks/useAppStateContext', () => ({
  default: () => ({ setItems: setItemsMock }),
}));

// Mock axiosInstance
const postMock = vi.fn();
const getMock = vi.fn();
vi.mock('@customConfig/customAxios', () => ({
  default: {
    post: postMock,
    get: getMock,
  },
}));

// Mock API endpoints
vi.mock('@customConfig/api', () => ({
  GET_FILTERED_DEBTS: '/filtered-debts',
  GET_TOP_DEBTS: '/top-debts',
}));

describe('useHeader hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('updates filter on handleFilterChange', () => {
    const { result } = renderHook(() => useHeader());

    act(() => {
      result.current.handleFilterChange({ target: { value: 'test' } } as any);
    });

    // Nie mamy bezpośredniego dostępu do filter, ale możemy sprawdzić efekt w handleFilterButtonClick
    postMock.mockResolvedValue({ data: [{ id: 1 }] });

    act(() => {
      result.current.handleFilterButtonClick();
    });

    expect(postMock).toHaveBeenCalledWith('/filtered-debts', { phrase: 'test' });
  });

  it('calls getFilteredDebts when filter is not empty', async () => {
    const { result } = renderHook(() => useHeader());

    act(() => {
      result.current.handleFilterChange({ target: { value: 'abc' } } as any);
    });

    postMock.mockResolvedValue({ data: [{ id: 123 }] });

    await act(async () => {
      result.current.handleFilterButtonClick();
    });

    expect(postMock).toHaveBeenCalled();
    expect(setItemsMock).toHaveBeenCalledWith([{ id: 123 }]);
  });

  it('calls getTopDebts when filter is empty', async () => {
    const { result } = renderHook(() => useHeader());

    getMock.mockResolvedValue({ data: [{ id: 999 }] });

    await act(async () => {
      result.current.handleFilterButtonClick();
    });

    expect(getMock).toHaveBeenCalled();
    expect(setItemsMock).toHaveBeenCalledWith([{ id: 999 }]);
  });
});
