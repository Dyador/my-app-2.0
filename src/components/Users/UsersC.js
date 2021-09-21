import style from './Users.module.css'
import Fotos from '../Dialogs/Fotos'
import * as axios from 'axios'
import userMock from '../../img/userMock.png'
import React from 'react'



class UsersC extends React.Component  {
    constructor(props){
       super(props)
       
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
         
         this.props.setUsers(response.data.items)
        })
        
     
        
        
    }

    render(){
       return  <div >
           
         {this.props.users.map(u =><div key={u.id}>
             
         
             {/*<Fotos  /> */} <img src={u.photos.small != null ? u.photos.small : userMock} />
         
         
             <div>
                 {u.followed ? <button onClick={()=> {this.props.unfollow(u.id)}}>unFollow</button>
                  : <button onClick={()=> {this.props.follow(u.id)}}>Follow</button>}
             
             </div>
        
         
         <div>{u.name}</div>
         <div>{u.id}</div>
         <div>{u.status}</div>
         
        
         </div>)}
        </div>
        
         }
}


export default UsersC