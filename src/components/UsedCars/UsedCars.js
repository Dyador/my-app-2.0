import style from './UsedCars.module.css'
import ContainerReviewUsedCars from './Comment/ContainerCommentUsedCars'
import Preloader from '../common/Preloader/Preloader'
const UsedCars = (props) => {
   if(!props.profile){
       return <Preloader />
   }
    return(
        <div className={style.wrapper}>
         
         <div className={style.content}>
         <div >
         <img src={props.profile.photos.large}></img>
         </div>
         <div className={style.info}>
         {props.profile.aboutMe}
         {props.profile.contacts.fullName}
         <div>
         {props.profile.contacts.vk}
         </div>
         <div>
         {props.profile.contacts.twitter}
         </div>
         <div>
         {props.profile.contacts.github}
         <div>
         {props.profile.contacts.instagram}
         </div>
         <div>
         {props.profile.lookingForAJobDescription}
         </div>
         </div>
         </div>
         <ContainerReviewUsedCars />
         
         </div>
        </div>
    )
}


export default UsedCars