import './App.css';
import { BrowserRouter, Switch, Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Router></Router>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
