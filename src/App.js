import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Update from "./components/Update";
import Form from './components/Form';

function App() {
  return (
    <div className='App_body'>
      <Navbar/>
      <div className='App_main'>
        <SideBar/>
        <div className='center'>
        <Update/>
        <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;
