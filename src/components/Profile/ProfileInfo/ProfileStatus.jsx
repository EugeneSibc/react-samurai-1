import React from "react";

class ProfileStatus extends React.Component {
    state={
        editMode:false,
        status:this.props.status
    }
    activateEditMode=()=>{
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode=()=>{
        this.setState({
            editMode:false
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange =(e)=>{
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                state:this.props.status
            })
        }
    }

    render(){
        return(
            <span>
                <b>Status:</b>
                {!this.state.editMode &&
                <span>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "---"}</span>
                </span>
                }
                {this.state.editMode &&
                <span>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </span>
                }
            </span>
        )
    }
}
export default ProfileStatus;
/*
.bind(this)*/
