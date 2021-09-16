import Users from './Users'
import { connect } from 'react-redux'
import React from 'react'
import {unFollowAc, followAc, setUsersAC} from '../../redux/users-reducer'



const mapStateToProps = (state) => {
    return{
       users: state.UsersPage.users
        
}
}
const mapDispatchToProps = (dispatch) => {
    
    return{
        follow:  (userId) =>{
            dispatch(followAc(userId))
        },
        unfollow:  (userId) =>{
            dispatch(unFollowAc(userId))
        },
        setUsers:  (users) =>{
            dispatch(setUsersAC(users))
            
        }
 
           
}

}


const ContainerUsers = connect(mapStateToProps, mapDispatchToProps )(Users)
export default ContainerUsers