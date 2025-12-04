import { renderHook } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import useFormats from './useFormats';

// Mock useLocale
vi.mock('./useLocale', () => ({
  default: () => ({ locale: 'pl-PL' }),
}));

describe('useTable hook', () => {
  it('formats date correctly', () => {
    const { result } = renderHook(() => useFormats());
    const { formatDate } = result.current;

    const formatted = formatDate('2025-12-03');
    expect(formatted).toBe('03.12.2025');
  });

  it('formats price correctly', () => {
    const { result } = renderHook(() => useFormats());
    const { formatPrice } = result.current;

    const formatted = formatPrice(1234);
    expect(formatted).toMatch(/^1\s234\s*zł/);
  });

  it('formats NIP correctly', () => {
    const { result } = renderHook(() => useFormats());
    const { formatNIP } = result.current;

    expect(formatNIP('1234567890')).toBe('123-456-78-90');
    expect(formatNIP('12-34-56')).toBeNull();
  });
});
