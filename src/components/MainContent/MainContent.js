import style from './MainContent.module.css'
import Comment from './Comment/Comment'
import CarInfo from './CarInfo/CarInfo'
let infoCar = {
car: "Audi",  
model: "A8",
engine: "3.0",
type: "Long",
prices:"55000$" 
}
const MainContent = () => {
    
    return(
        <div className={style.wrapper}>
         <div className={style.mainContent}>
         
         </div>
         <div className={style.content}>
         <div >
         <img className={style.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Audi_A8_L_D5_IMG_0066.jpg/1200px-Audi_A8_L_D5_IMG_0066.jpg'/>
         </div>

         
         <div className={style.info}>
             <CarInfo info={infoCar}/>
         </div>
         <Comment />
         </div>
        </div>
        
    )
}


export default MainContent