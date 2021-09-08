import style from './Comment.module.css'
import Review from './Review/Review'
import React from 'react';
const Comment = (props) =>{
   
  let NewReviewData = props.ReviewData.map(e => <Review comment={e.comment}  likeCount={e.likeCount}/>)

  let newPostText = React.createRef()

  let addPost = () =>{
     let text = newPostText.current.value
     props.addPostMc(text)
     newPostText.current.value =''
  }
    return(
        <div className={style.wrapper}>
        <div>
            <div>
        <textarea ref={newPostText}></textarea>
        </div>
        <button onClick={addPost} >Add comment</button>
        </div>
        <div>
       {NewReviewData}
       
        </div>
        </div>
    )
} 
export default Comment  