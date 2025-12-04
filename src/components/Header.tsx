import useHeader from '@customHooks/useHeader';

const Header = () => {
  const { loading, handleFilterChange, handleFilterButtonClick } = useHeader();

  return (
    <div className="header">
      <label className="header__label">Podaj Nip lub nazwę dłużnika</label>
      <div className="header__search-row">
        <input id="search" className="search-row__input" onChange={handleFilterChange} />
        <button
          className="search-row__button"
          aria-label="Wyszukaj dłużnika"
          onClick={handleFilterButtonClick}
          disabled={loading}
        >
          Szukaj
        </button>
      </div>
    </div>
  );
};

export default Header;
