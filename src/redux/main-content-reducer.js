


let initialState = {
    
        ReviewData: [
        {comment: 'take it',  likeCount: '10'},
        {comment: 'OK',  likeCount: '5'},
        {comment: '',  likeCount: '1'},
        {comment: 'give me the best price',  likeCount: '12'},
        
      ],
        newPostCp: '..',
    
      UsedCars:[
        {comment: 'WWW',  likeCount: '30'},
        {comment: 'nop',  likeCount: '52'},
        {comment: '6000$',  likeCount: '133'},
        {comment: 'give me the best price',  likeCount: '12'},
        
      ],
      newPost: '....', 
    
       infoCar: [
        {name: "Audi"},  
        {name: "A8"},
        {name: "3.0"},
        {name: "Long"},
        {name:"55000$"},
        {name: "quattro"}
    ]
        
    }
  
let mainContentReducer = (state = initialState, action) => { 
    
     switch(action.type){
    case'ADD-POST-MC' :{
        let newPost ={
            comment: state.newPostCp,
            likeCount: '100'
        }
        let copyState = {...state}
        copyState.ReviewData = [...state.ReviewData]
        copyState.ReviewData.push(newPost)
        copyState.newPostCp = ''
     
        return copyState
      }

    case 'UPDATE-TEXT-MAIN-CONTENT': {
         let copyState = {...state}
         copyState.newPostCp = action.newText
    
    return copyState
  }

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