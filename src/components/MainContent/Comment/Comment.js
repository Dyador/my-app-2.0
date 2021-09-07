import style from './Comment.module.css'
import Review from './Review/Review'
const Comment = (props) =>{
   
  let NewReviewData = props.ReviewData.map(e => <Review comment={e.comment}  likeCount={e.likeCount}/>)

    return(
        <div className={style.wrapper}>
        <div>
            <div>
        <textarea></textarea>
        </div>
        <button>Add comment</button>
        </div>
        <div>
       {NewReviewData}
        </div>
        </div>
    )
} 
export default Comment  