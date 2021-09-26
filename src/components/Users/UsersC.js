import style from './Users.module.css'
import Fotos from '../Dialogs/Fotos'
import * as axios from 'axios'
import userMock from '../../img/userMock.png'
import React from 'react'



class UsersC extends React.Component  {
   componentDidMount(){
      
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
         
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
        })  
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
         
            this.props.setUsers(response.data.items)
            
            
           })  

          
    }

    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i=1; i <= pagesCount; i++){
            pages.push(i)

        }
       return  <div >
           <div>
              {pages.map( p => {
               return <span onClick={ () => {this.onPageChanged(p)}} className={this.props.currentPage === p && style.n}>{p}</span>   
              })} 
           </div>
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