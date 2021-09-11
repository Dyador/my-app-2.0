
import CarInfo from './CarInfo'
import { connect } from 'react-redux'

let mapStateToProps = (state) =>{
    return{
        infoCar: state.MainContentPage.infoCar,
        
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
      
}
}

const ContainerCarInfo = connect(mapStateToProps, mapDispatchToProps )(CarInfo)
export default ContainerCarInfo