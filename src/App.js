import './App.css'
import ContainerDialogs from './components/Dialogs/ContainerDialogs';
import HeaderContainer from './components/Header/HeaderContainer'
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import UsedCarsContainer from './components/UsedCars/UsedCarsContainer'
import NewCars from './components/NewCars/NewCars'
import CarsFromEurope from './components/CarsFromEurope/CarsFromEurope'
import LostTitle from './components/LostTitle/LostTitle'
import ContainerUsers from './components/Users/ContainerUsers'
import Login from './components/Login/Login'
import {Route} from "react-router-dom";




const App = (props) => {

  return (
    
    <div className="App">

    <div className='Header'>  <HeaderContainer /></div>

    <div className='SideBar'>  <SideBar /></div>
    
    <div className='MainContent'>
    {/* exact  */}

    <Route path='/Dialogs' render={() => <ContainerDialogs 
    />} />
    {/* store={props.store} */}
    <Route path='/MainContent' render={() => <MainContent 
    
    />}/>
   
    <Route path='/Users' render={() => <ContainerUsers />}/> 
    <Route path='/UsedCars/:userId?' render={() => <UsedCarsContainer/>}/>
    <Route path='/Login' render={() => <Login />}/> 
    

    <Route path='/NewCars' component={NewCars}/>
    <Route path='/CarsFromEurope' component={CarsFromEurope}/>
    <Route path='/LostTitle' component={LostTitle}/>
    </div>
    </div>
    
  );
}


export default App
