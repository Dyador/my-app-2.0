import DialogsItem from './DialogsItem'
import style from './Dialogs.module.css'
import Messages from './Messages'
import React from 'react'






const Dialogs = (props) => {

  let Page = props.users.map(el => <DialogsItem  fullName={el.fullName}/> )
  let NewMessagesData = props.users.map(el => <Messages status={el.status} />)
 
  let newTextDialog = React.createRef()

  let addPostDialogd = () => {
    props.addPostDialog()
   
  }
 let onChangeDialogsTextd = () => {
  let text = newTextDialog.current.value 
  props.onChangeDialogsText(text)
 }

return(
    <div className={style.wrapper}>
    <div className={style.contacts}>  
      {Page}
      </div>
    <div className={style.messages}>
      {NewMessagesData}
    </div>
    <div>
    <textarea ref={newTextDialog} onChange={onChangeDialogsTextd} value={props.newPostText}/>
    <button onClick={addPostDialogd}>add Messages</button>
    </div>
    
   
    
    </div>
)
} 

export default Dialogs