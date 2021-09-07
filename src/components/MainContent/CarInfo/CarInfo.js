
import style from './CarInfo.module.css'

const CarInfo = (props) =>{
  
return(
 <div>
    <div>
  <a>{props.info.car}</a>
  </div>
  <div>
  <a>{props.info.model}</a>
  </div>
  <div>
  <a>{props.info.engine}</a>
  </div>
  <div>
  <a>{props.info.type}</a>
  </div>
  <div>
  <a>{props.info.prices}</a>
  </div>
 </div>
)
}
export default CarInfo