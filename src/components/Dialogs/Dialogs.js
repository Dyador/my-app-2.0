import DialogsItem from './DialogsItem'
import style from './Dialogs.module.css'
import Messages from './Messages'





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
return(
    <div className={style.wrapper}>
      

     
         
      <div className={style.contacts}>   
         <div>
            <DialogsItem name={DialogsItemData[0].name} id={DialogsItemData[0].id}/>
         </div>
         <div>
           <DialogsItem name={DialogsItemData[1].name} id={DialogsItemData[1].id}/>
         </div>
         <div>
           <DialogsItem name={DialogsItemData[2].name} id={DialogsItemData[2].id}/>
         </div>
         <div>
           <DialogsItem name={DialogsItemData[3].name} id={DialogsItemData[3].id}/>
         </div>
         <div>
           <DialogsItem name={DialogsItemData[4].name} id={DialogsItemData[4].id}/>
         </div>
         </div>

         
          
      <div className={style.messages}>
      <Messages messages={MessagesData[0].messages} />
      <Messages messages={MessagesData[1].messages} />
      <Messages messages={MessagesData[2].messages} />
      </div>   
     
    </div>
)
} 
export default Dialogs