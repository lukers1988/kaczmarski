import NoDataFound from './_partial/NoDataFound';
import DataRows from './_partial/DataRows';
import Preloader from './_partial/Preloader';
import useDebtsList from '@customHooks/useDebtsList';

const DebtsList = () => {
  const { loading, items } = useDebtsList();

  return (
    <div className="table-container">
      <table className="table-container__table">
        <thead className="table__thead">
          <tr className="thead__tr">
            <th className="tr__th thead__name-column sortable">Dłużnik</th>
            <th className="tr__th thead__nip-column">NIP</th>
            <th className="tr__th thead__value-column">Kwota zadłużenia</th>
            <th className="tr__th thead__date-column">Data powstania zadłużenia</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {loading && <Preloader />}
          {!loading && items.length === 0 ? <NoDataFound /> : <DataRows items={items} />}
        </tbody>
      </table>
    </div>
  );
};

export default DebtsList;
