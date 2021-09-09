
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



addPostMc () {
    
let newPost ={
    comment: this._state.MainContentPage.newPostCp,
    likeCount: '100'
}
this._state.MainContentPage.ReviewData.push(newPost)
this._state.MainContentPage.newPostCp = ''
this.rerender()
},

updateTextMainContent (newText) {
  this._state.MainContentPage.newPostCp = newText
  this.rerender()
},

addPostDialogsPage () {
let newPost ={
    messages: this._state.DialogsPage.newPostText, 
    id:'1'
}
this._state.DialogsPage.MessagesData.push(newPost)
this._state.DialogsPage.newPostText = ''
this.rerender()
},

updateTextDialogs (newText) {
this._state.DialogsPage.newPostText = newText
this.rerender()
},



 dispatch(action){
   
 if(action.type === 'ADD-POST-USED-CARS'){
  let newPost ={
    comment: this._state.MainContentPage.newPost, 
    likeCount: '44'
    }
    this._state.MainContentPage.UsedCars.push(newPost)
    this._state.MainContentPage.newPost = ''
    this.rerender()
 }else if(action.type === 'UPDATE-TEXT-USED-CR'){
 
  this._state.MainContentPage.newPost = action.newText
  this.rerender()
 }

 },




subscribe (observer)  {
    this.rerender = observer
},
rerender () {

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
export default store
window.store = store