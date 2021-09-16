import style from './Dialogs.module.css'

const Messages = (props) => {
    return(
        
        <div className={style.messagesItems}>
        {props.status}
       </div>
      
    )
}
export default Messages