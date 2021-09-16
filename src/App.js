import './App.css'
import ContainerDialogs from './components/Dialogs/ContainerDialogs';
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import UsedCars from './components/UsedCars/UsedCars'
import NewCars from './components/NewCars/NewCars'
import CarsFromEurope from './components/CarsFromEurope/CarsFromEurope'
import LostTitle from './components/LostTitle/LostTitle'
import ContainerUsers from './components/Users/ContainerUsers'
import Users from './components/Users/Users'
import {Route} from "react-router-dom";




const App = (props) => {

  return (
    
    <div className="App">

    <div className='Header'>  <Header /></div>

    <div className='SideBar'>  <SideBar /></div>
    
    <div className='MainContent'>
    {/* exact  */}

    <Route path='/Dialogs' render={() => <ContainerDialogs 
    />} />
    {/* store={props.store} */}
    <Route path='/MainContent' render={() => <MainContent 
    
    />}/>
   
    <Route path='/Users' render={() => <ContainerUsers />}/> 
    <Route path='/UsedCars' render={() => <UsedCars 
         
         />}/>
  
    

    <Route path='/NewCars' component={NewCars}/>
    <Route path='/CarsFromEurope' component={CarsFromEurope}/>
    <Route path='/LostTitle' component={LostTitle}/>
    </div>
    </div>
    
  );
}


export default App
