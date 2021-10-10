import {authAPI} from '../api/api'
let initialState = {
    
       usersId: null,
       email: null,
       login: null,
       isFetching: true,
       isAuth: false,
       
 
    
}

let authReducer = (state = initialState, action) =>{

     switch(action.type){
     case 'SET_USER_DATA':{
         return {...state,
           ...action.data,
           isAuth: true,
         }
       
    }
            default:   
            return state   
    
     
                             
     }
     
    
}
export let setAuthUserData = (usersId, login, email) =>{
    
    return{
     type: 'SET_USER_DATA',  data: {usersId, login, email}
    }
}

export let getAuthUserThunk = () =>{
  return (dispatch)=>{
    authAPI.me()
    .then(response=>{
      if(response.data.resultCode === 0){
        
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email))
      }
    })
  }
}


export default authReducer