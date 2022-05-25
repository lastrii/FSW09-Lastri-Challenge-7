import logo from './logo.svg';
import './App.css';
import { ListCars } from './components';
import { SignIn } from './components';
import { LandingPage } from './components';

function App() {
  return (
    <div className="App" style={{padding: '30px'}}>
      <LandingPage/>
    </div>
  );
}

export default App;
