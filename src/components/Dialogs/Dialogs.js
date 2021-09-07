import DialogsItem from './DialogsItem'
import style from './Dialogs.module.css'
import Messages from './Messages'





const Dialogs = (props) => {
return(
    <div className={style.wrapper}>
      

     
         
      <div className={style.contacts}>   
         <div>
           <DialogsItem name='Kristian' id='1'/>
         </div>
         <div>
           <DialogsItem name='Jessi' id='2'/>
         </div>
         <div>
           <DialogsItem name='David' id='3'/>
         </div>
         <div>
           <DialogsItem name='Mayson' id='4'/>
         </div>
         <div>
           <DialogsItem name='Skott' id='5'/>
         </div>
         </div>

         
          
      <div className={style.messages}>
      <Messages messages=" I'll call you" />
      <Messages messages='Of course ' />
      <Messages messages="When it's convenient" />
      </div>   
     
    </div>
)
} 
export default Dialogs