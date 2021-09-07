
import style from './CarInfo.module.css'

const CarInfo = (props) =>{
    let infoCar = [
        {name: "Audi"},  
        {name: "A8"},
        {name: "3.0"},
        {name: "Long"},
        {name:"55000$"} 
    ]

    let newinfoCar = infoCar.map(e => <a>{`${e.name} `}</a>) 
return(
 <div>
    {newinfoCar}
 </div>
)
}
export default CarInfo