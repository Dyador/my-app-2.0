import DialogsItem from './DialogsItem'
import style from './Dialogs.module.css'
import Messages from './Messages'






const Dialogs = (props) => {



 
  let NewDialogsItemData = props.state.DialogsItemData.map(el => <DialogsItem name={el.name} id={el.id}/>)
  let NewMessagesData = props.state.MessagesData.map(el =>  <Messages messages={el.messages} />)
return(
    <div className={style.wrapper}>
    <div className={style.contacts}>   
        {NewDialogsItemData}
    </div>
    <div className={style.messages}>
      {NewMessagesData}
    </div>   
    </div>
)
} 
export default Dialogs