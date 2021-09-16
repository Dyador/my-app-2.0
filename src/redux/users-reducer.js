let initialState = {
    
       users:[ ]

       
    
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
   case 'SET-USERS':{
    return {...state, users: [...state.users, ...action.users]}
   }
          default:   
            return state   
        
     }
     
    
}
export let setUsersAC = (users) =>{
    
    return{
     type: 'SET-USERS', users
    }
}

export let followAc = (userId) =>{
    return{
     type: 'FOLLOW', userId
    }
}

export let unFollowAc = (userId) =>{
    
    return{
    type: 'UN-FOLLOW' , userId
    }
}


export default usersReducer