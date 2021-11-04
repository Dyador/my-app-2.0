
import React from 'react'
import style from './CarInfo.module.css'

const CarInfo = (props) =>{
    

    let newinfoCar = props.infoCar.map(e => <a>{`${e.name} `}</a>) 
return(
 <div>
    {newinfoCar}
    <Status status={'sss'}/>
 </div>
)
}


class Status extends React.Component{
    state={
        editMode: false
    }
    activateEditMode = () =>{
        this.setState({
            editMode: true 
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode: false 
        })
    }
    render(){
    return(
        <div>
            {! this.state.editMode &&
              <div>
              <span onDoubleClick={ this.activateEditMode}>{this.props.status}</span>
              </div> 
       }
        { this.state.editMode &&
             <div>
             <input  autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input>
             </div>
        } 
       </div>
    )
    }

}

export default CarInfo