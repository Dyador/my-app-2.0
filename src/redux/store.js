import mainContentReducer from './main-content-reducer'
import usedCarsReducer from './used-cars-reducer'
import dialogsReducer from './dialogs-reducer'
let store = {

   _state: {
   
  
    DialogsPage: {
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
    },

    MainContentPage:{
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
},


 dispatch(action){


  mainContentReducer(this._state.MainContentPage, action)
  usedCarsReducer(this._state.MainContentPage, action)
  dialogsReducer(this._state.DialogsPage, action)
  this.rerender()

 

 },




subscribe (observer)  {
    this.rerender = observer
},
rerender () {

}
}




export default store
window.store = store