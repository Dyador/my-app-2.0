import './App.css'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';





const App = () => {
  return (
    <div className="App">

    <div className='Header'>  <Header /></div>

    <div className='SideBar'>  <SideBar /></div>

    <div className='MainContent'>  <MainContent /></div>
    
    </div>
  );
}


export default App
