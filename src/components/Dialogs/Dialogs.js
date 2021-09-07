import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'
import Foto from './Foto'

const Dialogs = () => {
return(
    <div className={style.wrapper}>
      

     
         
      <div className={style.contacts}>   
         <div>
         <Foto />
       <NavLink to="/Dialogs/1" activeClassName={style.active}>Kristian</NavLink>  
         </div>
         <div>
         <Foto />   
        <NavLink to="/Dialogs/2" activeClassName={style.active}>Jessi</NavLink> 
         </div>
         <div>
         <Foto />
       <NavLink to="/Dialogs/3" activeClassName={style.active}>David</NavLink>  
         </div>
         <div>
         <Foto />
        <NavLink to="/Dialogs/4" activeClassName={style.active}>Mayson</NavLink> 
         </div>
         <div>
         <Foto />
        <NavLink to="/Dialogs/5" activeClassName={style.active}>Skot</NavLink> 
         </div>
         </div>
          
      <div className={style.messages}>
        <div className={style.messagesItems}>
         I'll call you
        </div>
        <div className={style.messagesItems}>
          Of course 
        </div >
        <div className={style.messagesItems}>
         When it's convenient
        </div>
      
      </div>   
     
    </div>
)
} 
export default Dialogs