import style from './Comment.module.css'
import Review from './Review/Review'
import React from 'react';
import {addPostMc, onChangeTextMc} from '../../../redux/main-content-reducer'
const Comment = (props) =>{
   
  let NewReviewData = props.ReviewData.map(e => <Review comment={e.comment}  likeCount={e.likeCount}/>)

  let newPostText = React.createRef()

  let addPost = () =>{
    props.dispatch(addPostMc())
     
  }
  
  let onChangeText = () => {
    let text = newPostText.current.value
    props.dispatch(onChangeTextMc(text))
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