import React from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode=()=>{
    this.setState({
      editMode: true
    });
  }
  deactivateEditMode=()=>{
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange=(e)=>{
    this.setState({
      status: e.currentTarget.value
    });

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status){
      this.setState({
        status:this.props.status
      })
    }
  }

  render() {

    return (
      <div>
        <div>
          {this.state.editMode
            ?  <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
            :  <span className={s.status} onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
          }
        </div>
      </div>
    );
  }
};

export default ProfileStatus;
