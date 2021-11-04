import React from 'react'
import UsedCars from './UsedCars'
import { connect } from 'react-redux'
import { profileThunkCreator} from '../../redux/used-cars-reducer'
import { withRouter } from 'react-router'
import {compose } from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class UsedCarsContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId=2
        }
        this.props.profileThunkCreator(userId)
    
    }
    render(){
        
       
        
        return(
        <UsedCars {...this.props} profile={this.props.profile}/>
        )
    }
}






let mapStateToProps = (state) => ({
    profile: state.UsedCarsPage.profile,
    
})


export default compose(
    connect(mapStateToProps, { profileThunkCreator}),
    withRouter,
    withAuthRedirect)
    (UsedCarsContainer)
