

let dialogsReducer = (state, action) =>{

     switch(action.type){
     case 'ADD-POST-DIALOGS-PAGE':
        let newPost ={
            messages: state.newPostText, 
            id:'1'
        }
        state.MessagesData.push(newPost)
        state.newPostText = ''
        return state
        case 'UPDATE-TEXT-DIALOGS':
            state.newPostText = action.newText
            return state
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