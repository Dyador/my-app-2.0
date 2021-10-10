import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = (props) =>{

    return(
     <div className={style.wrapper}>
       <div className={style.item}>
       <a>login</a>
       </div>
       <div className={style.item}>
       <a>Автозапчасти</a>
       </div>
       <div className={style.item}>
       <a>Автотовары</a>
       </div>
       <div className={style.item}>
       <a>Автомобили</a>
       </div>
       <div className={style.item}>
       <a>Car Life</a>
       </div>
       <div className={style.login}>
         {props.isAuth ? props.login : <NavLink to={'/Login'}>Login</NavLink>  }
       </div>
     </div>
  
    )
  }
  export default Header