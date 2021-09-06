import style from './SideBar.module.css'

const SideBar = () => {
return(
    <div className={style.wrapper}>
      <div className={`${style.item} ${style.active}`}>
        <a>Все авто</a>
      </div>
      <div className={style.item}>
        <a>Бу</a>
      </div>
      <div className={style.item}>
        <a>Новые</a>
      </div>
      <div className={style.item}>
        <a>Под пригон</a>
      </div>
      <div className={style.item}>
        <a>Нерастаможенные</a>
      </div>
    </div>
)
} 
export default SideBar