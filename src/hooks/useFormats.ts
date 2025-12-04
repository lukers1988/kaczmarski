import { useCallback } from 'react';

const useFormats = () => {
  const formatDate = useCallback((dateString: string): string => {
    const date = new Date(dateString);

    const formated = Intl.DateTimeFormat('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).formatToParts(date);

    const partialObject: Partial<Record<Intl.DateTimeFormatPartTypes, string>> = {};

    formated.forEach((part: Intl.DateTimeFormatPart) => (partialObject[part.type] = part.value));

    const { day, month, year } = partialObject;

    return `${day}-${month}-${year}`;
  }, []);

  const formatPrice = useCallback((price: number): string => {
    const formated = Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 0,
    });

    return formated.format(price);
  }, []);


  return {
    formatDate,
    formatPrice,
  };
};

export default useFormats;
