const NoDataFound = () => {
  return (
    <tr className="body__tr">
      <td className="tr__empty-td " colSpan={4}>
        Brak danych dla podanych filtrów
      </td>
    </tr>
  );
};

export default NoDataFound;
