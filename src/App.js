
import Home from './components/Home';

import DataProvider from './context/DataProvide';

function App() {
  return (
    <DataProvider>    
      <Home/>
    </DataProvider>
  );
}

export default App;
