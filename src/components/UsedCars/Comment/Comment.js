import React from 'react'
import style from './Comment.module.css'
import Review from './Review/Review'
const Comment = (props) =>{

  let NewUsedCars = props.UsedCars.map(e => <Review comment={e.comment}  likeCount={e.likeCount}/>)
   let newPostUsedCar = React.createRef()

   let addPostUC = () => {
    props.addPostUsedCars()
      
   }
 let changTextUc = () =>{
    let text = newPostUsedCar.current.value
    props.updateTextUsedCr(text)
 }
    return(
        <div className={style.wrapper}>
        <div>
        <div>
        <textarea ref={newPostUsedCar} value={props.newPost}  onChange={changTextUc}/>
        </div>
        <button onClick={addPostUC}>Add comment</button>
        </div>
        <div>
       {NewUsedCars}
       
        </div>
        </div>
    )
} 
export default Comment  