import style from './Header.module.css'

const Header = () =>{
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
       
     </div>
  
    )
  }
  export default Header