import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import stroller from './images/stroller.png'
import { useNavigate } from 'react-router-dom';

function App() {

  let navigate = useNavigate();

  return (
    <>
    <div className='app'>
    <p className='heading'>Helping Hands</p>
    <button className='call-to-action' onClick={() => navigate('/user/login')}>Login</button>
    <button className='button' onClick={() => navigate('/user/create')}>Sign Up</button>
    <img src={stroller} width={255} height={215} alt="woman with stroller" />
    </div>
    </>
  );
}

export default App;
