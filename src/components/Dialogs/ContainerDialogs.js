import Dialogs from './Dialogs'
import React from 'react'
import {addPostDialogsPageAc, updateTextDialogsAc} from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'





// const ContainerDialogs = (props) => {
 
//  let state = props.store.getState() 

//  let addPostDialog = () => {  
//  props.store.dispatch(addPostDialogsPageAc())
   
//   }
//  let onChangeDialogsText = (text) => {
//  props.store.dispatch(updateTextDialogsAc(text))
//  }

// return(
//     <div >
//     <Dialogs DialogsItemData={state.DialogsPage.DialogsItemData}
//      MessagesData={state.DialogsPage.MessagesData} 
//      addPostDialog={addPostDialog}
//      onChangeDialogsText={onChangeDialogsText}
//      newPostText={state.DialogsPage.newPostText}
//      />
//     </div>
// )
// } 
const mapStateToProps = (state) => {
    return{
        DialogsItemData: state.DialogsPage.DialogsItemData,
        MessagesData: state.DialogsPage.MessagesData,
        newPostText: state.DialogsPage.newPostText,
}
}
const mapDispatchToProps = (dispatch,store) => {
    
    return{
        addPostDialog: () =>{
            dispatch(addPostDialogsPageAc())
           },
        onChangeDialogsText: (text) =>{
            
           dispatch(updateTextDialogsAc(text))
           }
           
}
}

const ContainerDialogs = connect(mapStateToProps, mapDispatchToProps )(Dialogs)
export default ContainerDialogs