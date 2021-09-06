import style from './UsedCars.module.css'

const UsedCars = () => {
    return(
        <div className={style.wrapper}>
         
         <div className={style.content}>
         <div >
         <img className={style.img} src='https://cdn.riastatic.com/photosnewr/auto/newauto_photos/dodge-nitro__617898-341x224.jpg'/>
         </div>
         <div className={style.info}>
             <a>Dodge</a>
             <a>Nitro</a>
             <a>3.7</a>
             <a>SUV</a>
             <a>8000$</a>
         </div>
         
         </div>
        </div>
    )
}


export default UsedCars