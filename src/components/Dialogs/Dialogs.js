import DialogsItem from './DialogsItem'
import style from './Dialogs.module.css'
import Messages from './Messages'
import { isElement } from 'react-dom/test-utils'





const Dialogs = (props) => {



 let DialogsItemData = [
   {name: 'Kristian', id:'1'},
   {name: 'Jessi', id: '2'},
   {name: 'David', id: '3'},
   {name: 'Mayson', id: '4'},
   {name: 'Skott', id: '5'},
  ]
  
  let MessagesData =[
    {messages: " I'll call you", id:'1'},
    {messages: 'Of course ', id: '2'},
    {messages: "When it's convenient", id: '3'},
    
  ]
  let NewDialogsItemData = DialogsItemData.map(el => <DialogsItem name={el.name} id={el.id}/>)
  let NewMessagesData = MessagesData.map(el =>  <Messages messages={el.messages} />)
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