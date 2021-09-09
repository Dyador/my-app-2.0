import style from './Comment.module.css'
import Review from './Review/Review'
import React from 'react';
const Comment = (props) =>{
   
  let NewReviewData = props.ReviewData.map(e => <Review comment={e.comment}  likeCount={e.likeCount}/>)

  let newPostText = React.createRef()

  let addPost = () =>{
    props.addPostMc()
     
  }
  
  let onChangeText = () => {
    let text = newPostText.current.value
    props.updateTextMainContent(text)
  }

    return(
        <div className={style.wrapper}>
        <div>
            <div>
        <textarea ref={newPostText} onChange={onChangeText} value={props.newPostCp}></textarea>
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