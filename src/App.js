import './App.css'
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';
import UsedCars from './components/UsedCars/UsedCars'
import NewCars from './components/NewCars/NewCars'
import CarsFromEurope from './components/CarsFromEurope/CarsFromEurope'
import LostTitle from './components/LostTitle/LostTitle'
import {Route} from "react-router-dom";




const App = (props) => {

  return (
    
    <div className="App">

    <div className='Header'>  <Header /></div>

    <div className='SideBar'>  <SideBar /></div>
   
    <div className='MainContent'>
    {/* exact  */}

    <Route path='/Dialogs' render={() => <Dialogs state={props.state.DialogsPage} 
    addPostDialogsPage={props.addPostDialogsPage}  updateTextDialogs={props.updateTextDialogs}
    />} />
    <Route path='/MainContent' render={() => <MainContent state={props.state.MainContentPage} 
    dispatch={props.dispatch}
    />}/>

    <Route path='/UsedCars' render={() => <UsedCars state={props.state.MainContentPage}
    dispatch={props.dispatch} />}/>


    <Route path='/NewCars' component={NewCars}/>
    <Route path='/CarsFromEurope' component={CarsFromEurope}/>
    <Route path='/LostTitle' component={LostTitle}/>
    </div>
    </div>
    
  );
}


export default App
