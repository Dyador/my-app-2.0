import Dialogs from './Dialogs'
import React from 'react'
import {addPostDialogsPageAc, updateTextDialogsAc,} from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose } from 'redux'
const mapStateToProps = (state) => {
    
    return{
        users: state.DialogsPage.users,
        users: state.DialogsPage.users,
        newPostText: state.DialogsPage.newPostText,
        
}
}
const mapDispatchToProps = (dispatch) => {
    
    return{
        addPostDialog: () =>{
            dispatch(addPostDialogsPageAc())
           },
        onChangeDialogsText: (text) =>{
            
           dispatch(updateTextDialogsAc(text))
           },
         
 
           
}
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps ),
    withAuthRedirect
)(Dialogs)

// const ContainerDialogs = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps )(Dialogs))
// export default ContainerDialogs