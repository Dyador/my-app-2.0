import Users from './Users'

import { connect } from 'react-redux'
import React from 'react'
import {unFollowThunkCreator, followThunkCreator, setTotalUsersCount, getUsersThunkCreator} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose } from 'redux'
class UsersC extends React.Component  {


    


    componentDidMount(){
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

        
     }

   

     onPageChanged = (pageNumber) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
        
           
     }
 
     render(){
       
        return <>
       {this.props.isFetching ?  <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} users={this.props.users}
        followThunkCreator={this.props.followThunkCreator} unFollowThunkCreator={this.props.unFollowThunkCreator} followingInProgress={this.props.followingInProgress}
        togglefollowingInProgress={this.props.togglefollowingInProgress}/>
         </>
          }
 }

const mapStateToProps = (state) => {
    return{
       users: state.UsersPage.users,
       pageSize: state.UsersPage.pageSize,
       totalUsersCount: state.UsersPage.totalUsersCount,
       currentPage: state.UsersPage.currentPage,
       isFetching: state.UsersPage.isFetching,
       followingInProgress: state.UsersPage.followingInProgress,
}
}



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        followThunkCreator,
        unFollowThunkCreator,
        setTotalUsersCount,
        getUsersThunkCreator,
    } ),
    )
    (UsersC)

