import style from './Header.module.css'

const Header = () =>{
    return(
     <div className={style.wrapper}>
       <div className={style.login}>
       <a>login</a>
       </div>
       <div className={style.login}>
       <a>Автозапчасти</a>
       </div>
       <div className={style.login}>
       <a>Автотовары</a>
       </div>
       <div className={style.login}>
       <a>Автомобили</a>
       </div>
       <div className={style.login}>
       <a>Car Life</a>
       </div>
       
     </div>
  
    )
  }
  export default Header