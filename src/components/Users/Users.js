import style from './Users.module.css'
import userMock from '../../img/userMock.png'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'
import {usersAPI} from '../../api/api'

const Users = (props) => {
 
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++){
        pages.push(i)

    }
    return(
        <div >
           <div>
              {pages.map( p => {
               return <span onClick={ () => {props.onPageChanged(p)}} className={props.currentPage === p && style.n}>{p}</span>   
              })} 
           </div>
         {props.users.map(u =><div key={u.id}>
             
         
             <div>
             <NavLink to={'/UsedCars/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userMock} />
              </NavLink>
              </div>
             <div>
                 {u.followed 
                  ? <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={()=> {
                    props.unFollowThunkCreator(u.id)
                 }}>unFollow</button>


               : <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={()=> {
                props.followThunkCreator(u.id)
               }}>Follow</button>}
             
             </div>
        
         
         <div>{u.name}</div>
         <div>{u.id}</div>
         <div>{u.status}</div>
         
        
         </div>)}
        </div>
        
    )
}


export default Users