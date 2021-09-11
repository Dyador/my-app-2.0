import style from './MainContent.module.css'
import ContainerReviewMainContent from './Comment/ContainerCommentMainContent'
import ContainerCarInfo from './CarInfo/ContainerCarInfo'

const MainContent = (props) => {

    return(
        <div className={style.wrapper}>
         <div className={style.mainContent}>
         
         </div>
         <div className={style.content}>
         <div >
         <img className={style.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Audi_A8_L_D5_IMG_0066.jpg/1200px-Audi_A8_L_D5_IMG_0066.jpg'/>
         </div>


         <div className={style.info}>
             <ContainerCarInfo />
         </div>
         <ContainerReviewMainContent/>
         </div>
        </div>
        
    )
}


export default MainContent