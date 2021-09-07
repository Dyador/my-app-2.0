import style from './Comment.module.css'
import Review from './Review/Review'
const Comment = (props) =>{
   let ReviewData =[
       {comment: 'take it',  likeCount: '10'},
       {comment: 'OK',  likeCount: '5'},
       {comment: '',  likeCount: '1'},
   ]


    return(
        <div className={style.wrapper}>
        <div>
            <div>
        <textarea></textarea>
        </div>
        <button>Add comment</button>
        </div>
        <div>
        <Review comment={ReviewData[0].comment}  likeCount={ReviewData[0].likeCount}/>
        <Review comment={ReviewData[1].comment}  likeCount={ReviewData[1].likeCount} />
        <Review comment={ReviewData[2].comment}  likeCount={ReviewData[2].likeCount}/>
        </div>
        </div>
    )
} 
export default Comment  