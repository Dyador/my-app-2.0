import style from './Dialogs.module.css'

const Messages = (props) => {
    return(
        
        <div className={style.messagesItems}>
        {props.messages}
       </div>
      
    )
}
export default Messages