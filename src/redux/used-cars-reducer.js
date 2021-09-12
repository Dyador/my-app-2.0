


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


let usedCarsReducer = (state = initialState, action) => {
  
     switch(action.type){
         case'ADD-POST-USED-CARS':{
         let newPost ={
            comment: state.newPost, 
            likeCount: '44'
            }
            let copyState = {...state}
            copyState.UsedCars = [...state.UsedCars]
            copyState.UsedCars.push(newPost)
            copyState.newPost = ''
            return copyState
          }
        case 'UPDATE-TEXT-USED-CR':{
           let copyState = {...state}
            copyState.newPost = action.newText
            return copyState
        }
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