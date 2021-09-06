import style from './Comment.module.css'
import Review from './Review/Review'
const Comment = (props) =>{
    return(
        <div className={style.wrapper}>
        <div>
        <textarea></textarea>
        <button>Add comment</button>
        </div>
        <div>
        <Review comment='take it'  likeCount='10'/>
        <Review likeCount='5' />
        <Review likeCount='1'/>
        </div>
        </div>
    )
} 
export default Comment  