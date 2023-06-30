import './App.css'
import RepositoryList from './components/RepositoryList'
import { Provider} from 'react-redux';

import store from './store';
import Test from './components/teste';
function App() {
  return (
    <Provider store={store}>
      <RepositoryList />
      <Test />
    </Provider>
  )
}

export default App
