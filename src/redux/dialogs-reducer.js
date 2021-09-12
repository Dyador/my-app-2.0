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
       {messages: "When it's convenient", id: '3'},
       
     ],
      
    
}

let dialogsReducer = (state = initialState, action) =>{

     switch(action.type){
     case 'ADD-POST-DIALOGS-PAGE':{
        let newPost ={
            messages: state.newPostText, 
            id:'1'
        }
        let copyState = {...state} 
        copyState.MessagesData = [...state.MessagesData]
        copyState.MessagesData.push(newPost)
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