import style from './Users.module.css'
import Fotos from '../Dialogs/Fotos'
import * as axios from 'axios'
import userMock from '../../img/userMock.png'
const Users = (props) => {
    let getUser = () => {

   
   
   if(props.users.length === 0){
   axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
    
    props.setUsers(response.data.items)
   })
   

   
   }
}
    return(
        <div >
            <button onClick={getUser}>Get Users</button>
         {props.users.map(u =><div key={u.id}>
             
         
             {/*<Fotos  /> */} <img src={u.photos.small != null ? u.photos.small : userMock} />
         
         
             <div>
                 {u.followed ? <button onClick={()=> {props.unfollow(u.id)}}>unFollow</button>
                  : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}
             
             </div>
        
         
         <div>{u.name}</div>
         <div>{u.id}</div>
         <div>{u.status}</div>
         
        
         </div>)}
        </div>
        
    )
}


export default Users