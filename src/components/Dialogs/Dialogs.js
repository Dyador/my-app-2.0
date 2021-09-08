import DialogsItem from './DialogsItem'
import style from './Dialogs.module.css'
import Messages from './Messages'
import React from 'react'






const Dialogs = (props) => {
  let NewDialogsItemData = props.state.DialogsItemData.map(el => <DialogsItem name={el.name} id={el.id}/>)
  let NewMessagesData = props.state.MessagesData.map(el =>  <Messages messages={el.messages} />)
 
  let newTextDialog = React.createRef()
  let addPostDialog = () => {
    let text = newTextDialog.current.value
    props.addPostDialogsPage(text)
    newTextDialog.current.value=''
  }


return(
    <div className={style.wrapper}>
    <div className={style.contacts}>   
        {NewDialogsItemData}
    </div>
    <div className={style.messages}>
      {NewMessagesData}
    </div>
    <div>
    <textarea ref={newTextDialog}></textarea>
    <button onClick={addPostDialog}>add Messages</button>
    </div>
    
      
    
    </div>
)
} 
export default Dialogs