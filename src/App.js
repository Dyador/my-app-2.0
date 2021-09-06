import './App.css'
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import UsedCars from './components/UsedCars/UsedCars'
import NewCars from './components/NewCars/NewCars'
import CarsFromEurope from './components/CarsFromEurope/CarsFromEurope'
import LostTitle from './components/LostTitle/LostTitle'
import {BrowserRouter, Route} from "react-router-dom";




const App = () => {
  return (
    <BrowserRouter>
    <div className="App">

    <div className='Header'>  <Header /></div>

    <div className='SideBar'>  <SideBar /></div>
   
    <div className='MainContent'>
    
    <Route path='/Dialogs' component={Dialogs}/>
    <Route path='/MainContent' component={MainContent}/>
    <Route path='/UsedCars' component={UsedCars}/>
    <Route path='/NewCars' component={NewCars}/>
    <Route path='/CarsFromEurope' component={CarsFromEurope}/>
    <Route path='/LostTitle' component={LostTitle}/>
    </div>
    </div>
    </BrowserRouter>
  );
}


export default App
