
import style from './CarInfo.module.css'

const CarInfo = (props) =>{
    

    let newinfoCar = props.infoCar.map(e => <a>{`${e.name} `}</a>) 
return(
 <div>
    {newinfoCar}
 </div>
)
}
export default CarInfo