import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import QuoteMachine from './components/QuoteMachine';

function App() {
  return (
    <Provider store={store}>
      <QuoteMachine />
    </Provider>
  );
}

export default App;
