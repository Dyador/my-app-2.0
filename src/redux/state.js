


let state = {
   
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
}

window.state = state

export let addPostMc = (messages) => {
    
let newPost ={
    comment: messages,
    likeCount: '100'
}
 state.MainContentPage.ReviewData.push(newPost)
 rerender()
}
export let addPostDialogsPage = () =>{
let newPost ={
    messages: state.DialogsPage.newPostText, 
    id:'1'
}
state.DialogsPage.MessagesData.push(newPost)
state.DialogsPage.newPostText = ''
rerender()
}
export let updateTextDialogs = (newText) => {
state.DialogsPage.newPostText = newText
rerender()
}






export let addPostUsedCars = (messages) => {
    let newPost ={
    comment: state.MainContentPage.newPost, 
    likeCount: '44'
    }
    state.MainContentPage.UsedCars.push(newPost)
    state.MainContentPage.newPost = ''
    rerender()
}
export let updateTextUsedCr = (newText) => {
state.MainContentPage.newPost = newText
rerender()
}


export let subscribe = (observer) => {
    rerender = observer
}
let rerender = () => {

}

export default state 