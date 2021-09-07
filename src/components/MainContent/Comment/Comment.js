import style from './Comment.module.css'
import Review from './Review/Review'
const Comment = (props) =>{
   let ReviewData =[
       {comment: 'take it',  likeCount: '10'},
       {comment: 'OK',  likeCount: '5'},
       {comment: '',  likeCount: '1'},
   ]
  let NewReviewData = ReviewData.map(e => <Review comment={e.comment}  likeCount={e.likeCount}/>)

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