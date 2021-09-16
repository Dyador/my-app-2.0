let initialState = {
    
        DialogsItemData: [
        {name: 'Kristian', id:'1'},
        {name: 'Jessi', id: '2'},
        {name: 'David', id: '3'},
        {name: 'Mayson', id: '4'},
        {name: 'Skott', id: '5'},
       
     ],
      newPostText:'...',
  
     MessagesData: [
       {messages: " I'll call you", id:'1'},
       {messages: 'Of course ', id: '2'},
       { id: '3', messages: "When it's convenient"},
       
     ],
    
     users: [
        {fullName: 'Kristian', id:'1',  status: "I'll call you", followed: false, location:{city: 'Kiev', country:'Ukraine'}},
        {fullName: 'Jessi', id:'1',  status: "Of course",followed: false, location: {city: 'Kiev', country:'Ukraine'}},
        {fullName: 'David', id:'1',  status: "When it's convenient", followed: false, location: {city: 'Kiev', country:'Ukraine'}},
        {fullName: 'Mayson', id:'1',  status: "",},
        {fullName: 'Skott', id:'1',  status: "?",}
     ]

    
}

let dialogsReducer = (state = initialState, action) =>{

     switch(action.type){
     case 'ADD-POST-DIALOGS-PAGE':{
        let newPost ={
            status: state.newPostText, 
            id:'1'
        }
        let copyState = {...state} 
        copyState.users = [...state.users]
        copyState.users.push(newPost)
        copyState.newPostText = ''
        return copyState
    }
        case 'UPDATE-TEXT-DIALOGS':{
            let copyState = {...state} 
            copyState.newPostText = action.newText
            return copyState
        }
          default:   
            return state   
        
     }
     
    
}


export let addPostDialogsPageAc = () =>{
    return{
     type: 'ADD-POST-DIALOGS-PAGE'
    }
}

export let updateTextDialogsAc = (text) =>{
    
    return{
    type: 'UPDATE-TEXT-DIALOGS' , newText: text
    }
}


export default dialogsReducer