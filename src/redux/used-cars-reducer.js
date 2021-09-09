

let usedCarsReducer = (state, action) => {

     switch(action.type){
         case'ADD-POST-USED-CARS':
         let newPost ={
            comment: state.newPost, 
            likeCount: '44'
            }
            state.UsedCars.push(newPost)
            state.newPost = ''
            return state
        case 'UPDATE-TEXT-USED-CR':
            state.newPost = action.newText
            return state
        default:
            return state
     }

   
}

export let addPostUsedCars = () =>{
    return{
      type: "ADD-POST-USED-CARS"
    }
  }
  
  
  export let updateTextUsedCr = (text) => {
    return{
     type: 'UPDATE-TEXT-USED-CR',
     newText: text
    }
  }

export default usedCarsReducer