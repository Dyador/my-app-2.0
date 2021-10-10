import {usersAPI} from '../api/api'

let initialState = {
    
       users:[ ],
       pageSize: 5,
       totalUsersCount: 0,
       currentPage: 1,
       isFetching: true,
       followingInProgress: [],
       
    
    //  users: [
    //     {fullName: 'Kristian', id:'1',  status: "I'll call you", followed: false, location:{city: 'Kiev', country:'Ukraine'}, fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFW_FvHSXWn7v1rTv7FAYdbTINUwqx5in_3w&usqp=CAU'},
    //     {fullName: 'Jessi', id:'1',  status: "Of course",followed: true, location: {city: 'Kiev', country:'Ukraine'},  fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFW_FvHSXWn7v1rTv7FAYdbTINUwqx5in_3w&usqp=CAU'} ,
    //     {fullName: 'David', id:'1',  status: "When it's convenient", followed: false, location: {city: 'Kiev', country:'Ukraine'}, fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFW_FvHSXWn7v1rTv7FAYdbTINUwqx5in_3w&usqp=CAU'},
    //     {fullName: 'Mayson', id:'1',  status: "",},
    //     {fullName: 'Skott', id:'1',  status: "?",}
    //  ]

    
}

let usersReducer = (state = initialState, action) =>{

     switch(action.type){
     case 'FOLLOW':{
         return {...state,
            users: state.users.map( u =>{
                if(u.id === action.userId){
                    return {...u, followed: true}
                }
                return u
            })
         }
       
    }
    case 'UN-FOLLOW':{
        return {...state,
           users: state.users.map( u =>{
               if(u.id === action.userId){
                   return {...u, followed: false}
               }
               return u
           })
        }
      
   }
   case 'SET-CURRENT-PAGE':{
    return {...state, currentPage: action.currentPage}
  
}
   case 'SET-USERS':{
    return {...state, users: action.users}
   }
   case 'SET-TOTAL-USERS-COUNT':{
    return {...state, totalUsersCount: action.count}
   }
   case 'TOGGLE-IS-FETCHING':{
    return {...state, isFetching: action.isFetching}
   }
   case 'FOLLOWING-IN-PROGRESS':{
    return {...state,
          followingInProgress: action.isFetching
           ? [...state.followingInProgress, action.userId]
           : state.followingInProgress.filter(id => id != action.userId)}
   }
          default:   
            return state   
    
     
                             
     }
     
    
}
export let togglefollowingInProgress = (isFetching, userId) =>{
    
    return{
     type: 'FOLLOWING-IN-PROGRESS',  isFetching, userId
    }
}
export let setCurrentPage = (currentPage) =>{
    
    return{
     type: 'SET-CURRENT-PAGE',  currentPage
    }
}
export let setUsers = (users) =>{
    
    return{
     type: 'SET-USERS', users
    }
}

export let follow = (userId) =>{
    return{
     type: 'FOLLOW', userId
    }
}

export let unfollow = (userId) =>{
    
    return{
    type: 'UN-FOLLOW' , userId
    }
}
export let setTotalUsersCount = (totalUsersCount) =>{
    
    return{
    type: 'SET-TOTAL-USERS-COUNT' , count: totalUsersCount
    }
}
export let toggleIsFetching = (isFetching) =>{
    
    return{
    type: 'TOGGLE-IS-FETCHING' , isFetching 
    }
}


export const getUsersThunkCreator = (currentPage, pageSize) => { 
    return (dispatch) =>{
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize).then(data =>{
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
     })  
}
}

export const unFollowThunkCreator = (userId) => { 
    return (dispatch) =>{
        dispatch(togglefollowingInProgress(true, userId))
        usersAPI.unFollow(userId)    
        .then(response=>{
            if(response.data.resultCode == 0){
                
                dispatch(unfollow(userId))
            }
            dispatch(togglefollowingInProgress(false, userId))
         })  
}
}
export const followThunkCreator = (userId) => { 
    return (dispatch) =>{
        dispatch(togglefollowingInProgress(true, userId))
        usersAPI.follow(userId)
        .then(response=>{
            if(response.data.resultCode == 0){
                dispatch(follow(userId))
            }
            dispatch(togglefollowingInProgress(false, userId))
         })  
}
}


export default usersReducer