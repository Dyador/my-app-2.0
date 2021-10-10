import React from 'react'
import UsedCars from './UsedCars'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { profileThunkCreator} from '../../redux/used-cars-reducer'
import { withRouter } from 'react-router'

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
    profile: state.UsedCarsPage.profile
})
    

let WithUrlDataCc = withRouter(UsedCarsContainer)
export default connect(mapStateToProps, { profileThunkCreator})(WithUrlDataCc)