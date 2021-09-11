import {addPostUsedCars, updateTextUsedCr} from '../../../redux/used-cars-reducer'
import Comment from './Comment'
import { connect } from 'react-redux'

let mapStateToProps = (state) =>{
    return{
        newPost: state.UsedCarsPage.newPost,
        UsedCars: state.UsedCarsPage.UsedCars
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addPostUC: () =>{
            dispatch(addPostUsedCars())  
    },
    changTextUc: (text) =>{
        dispatch(updateTextUsedCr(text))
    }
}
}

const ContainerReviewUsedCars = connect(mapStateToProps, mapDispatchToProps )(Comment)
export default ContainerReviewUsedCars