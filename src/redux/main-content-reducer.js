

let mainContentReducer = (state, action) => { 
     switch(action.type){
    case'ADD-POST-MC' :
        let newPost ={
            comment: state.newPostCp,
            likeCount: '100'
        }
        state.ReviewData.push(newPost)
        state.newPostCp = ''
        return state

    case 'UPDATE-TEXT-MAIN-CONTENT': 
         state.newPostCp = action.newText
    return state

    default: 
         return state
     }
   
     
 }
 export let addPostMc = () => {
    return{
      type: 'ADD-POST-MC'
  }
  }
  export let onChangeTextMc = (text) => {
    return{
      type: 'UPDATE-TEXT-MAIN-CONTENT',  newText: text
  }
  }
 
 export default mainContentReducer