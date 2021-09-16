import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'
import Fotos from './Fotos'

const DialogsItem = (props) => {
    let info = "/Dialogs/" + props.id

   
    return(
      <div>
        
      <Fotos />
      
      <NavLink to={info} activeClassName={style.active}>{props.fullName}</NavLink>
       <div> </div>
      </div>
    )
  }
  export default DialogsItem