import useFormats from '@customHooks/useFormats';
import DataRowsInterface from '@customInterfaces/DataRowsInterface';
import { DebtsType } from '@customTypes/DebtsType';

const DataRows = (props: DataRowsInterface) => {
  const { items } = props;

  const { formatDate, formatPrice } = useFormats();

  return items.map((item: DebtsType, index: number) => (
    <tr className="body__tr" key={index}>
      <td className="tr__td">{item.Name}</td>
      <td className="tr__td">{item.NIP}</td>
      <td className="tr__td">{formatPrice(item.Value)}</td>
      <td className="tr__td">{formatDate(item.Date)}</td>
    </tr>
  ));
};

export default DataRows;
