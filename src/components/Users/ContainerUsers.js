import Users from './Users'
import UsersC from './UsersC'
import { connect } from 'react-redux'
import React from 'react'
import {unFollowAc, followAc, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from '../../redux/users-reducer'



const mapStateToProps = (state) => {
    return{
       users: state.UsersPage.users,
       pageSize: state.UsersPage.pageSize,
       totalUsersCount: state.UsersPage.totalUsersCount,
       currentPage: state.UsersPage.currentPage,
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
            
        },
        setCurrentPage:  (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
            
        },
        setTotalUsersCount:  (totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount))
            
        }
 
           
}

}


const ContainerUsers = connect(mapStateToProps, mapDispatchToProps )(UsersC)
export default ContainerUsers