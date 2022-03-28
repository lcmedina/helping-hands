import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleBar from './components/TitleBar';
import stroller from './images/stroller.png'

function App() {
  return (
    <div className='app'>
    <TitleBar />
    <p className='heading'>Helping Hands</p>
    <button className='call-to-action'>Login</button>
    <button>Sign Up</button>
    <img src={stroller} width={255} height={215} />
    </div>
  );
}

export default App;
