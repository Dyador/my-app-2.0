import style from './SideBar.module.css'

const SideBar = () => {
return(
    <div className={style.wrapper}>
      <div>
        <a>Все авто</a>
      </div>
      <div>
        <a>Бу</a>
      </div>
      <div>
        <a>Новые</a>
      </div>
      <div>
        <a>Под пригон</a>
      </div>
      <div>
        <a>Нерастаможенные</a>
      </div>
    </div>
)
} 
export default SideBar