import style from './SideBar.module.css'
import {NavLink} from "react-router-dom";
const SideBar = () => {
return(
    <div className={style.wrapper}>
      <div className={`${style.item} ${style.active}`}>
        <NavLink to="/MainContent"  activeClassName={style.active}>Все авто <span className={style.MainContent}>MainContent</span></NavLink>
      </div>

      <div className={style.item}>
        <NavLink to="/UsedCars" activeClassName={style.active}>Used Сars</NavLink>
      </div>

      <div className={style.item}>
        <NavLink to="/NewCars" activeClassName={style.active}>New Cars</NavLink>
      </div>

      <div className={style.item}>
        <NavLink to="/CarsFromEurope"  activeClassName={style.active}>Cars From Europe</NavLink>
      </div>

      <div className={style.item}>
        <NavLink to="/LostTitle"  activeClassName={style.active}>Lost Title</NavLink>
      </div>

      <div className={style.item}>
        <NavLink to="/Dialogs"  activeClassName={style.active}>Dialogs</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/Users"  activeClassName={style.active}>Users</NavLink>
      </div>
    </div>
)
} 
export default SideBar