import '@customStyles/layout.less';
import Header from '@customComponents/Header';
import AppStateProvider from '@customProviders/AppStateProvider';
import DebtsList from '@customComponents/DebtsList';

const App = () => {
  return (
    <AppStateProvider>
      <Header />
      <DebtsList />
    </AppStateProvider>
  );
};

export default App;
