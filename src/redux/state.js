import {rerender} from '../index'
let state = {
    DialogsPage: {
      DialogsItemData: [
      {name: 'Kristian', id:'1'},
      {name: 'Jessi', id: '2'},
      {name: 'David', id: '3'},
      {name: 'Mayson', id: '4'},
      {name: 'Skott', id: '5'},
     
   ],

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

export let addPostMc = (messages) => {
    
let newPost ={
    comment: messages,
    likeCount: '100'
}
 state.MainContentPage.ReviewData.push(newPost)
 rerender()
}
export let addPostDialogsPage = (messages) =>{
let newPost ={
    messages: messages, 
    id:'1'
}
state.DialogsPage.MessagesData.push(newPost)
rerender()
}
export let addPostUsedCars = (messages) => {
    let newPost ={
    comment: messages, 
    likeCount: '44'
    }
    state.MainContentPage.UsedCars.push(newPost)
    rerender()
}

export default state 