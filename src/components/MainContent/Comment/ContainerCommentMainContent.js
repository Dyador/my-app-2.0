import {addPostMc, onChangeTextMc}  from '../../../redux/main-content-reducer' 
import CommentMc from './CommentMc'
import { connect } from 'react-redux'

let mapStateToProps = (state) =>{
   
    return{
        newPostCp: state.MainContentPage.newPostCp,
        ReviewData: state.MainContentPage.ReviewData
    }
}
let mapDispatchToProps = (dispatch) =>{
    
    return{
        addPostMc: () =>{
            dispatch(addPostMc()) 
    },
    onChangeTextMc: (text) =>{
        dispatch(onChangeTextMc(text))
    }
}
}


const ContainerReviewMainContent = connect(mapStateToProps, mapDispatchToProps )(CommentMc)
export default ContainerReviewMainContent