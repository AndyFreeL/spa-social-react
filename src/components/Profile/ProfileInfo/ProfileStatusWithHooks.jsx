import React, {useEffect, useState} from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css'

const ProfileStatusWithHooks =(props)=> {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(()=>{
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode =()=>{
    setEditMode(true);
  }

  const deactivateEditMode=()=>{
    setEditMode(false);
    props.updateStatus(status);
  }

 const onStatusChange=(e)=>{
    setStatus(e.currentTarget.value);

  }

  return (
    <div>
      <div>
        {!editMode &&
          <div>
            <span onDoubleClick={activateEditMode} className={s.status} >{props.status || '-------'}</span>
          </div>
        }
        {editMode &&
          <div>
            <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
          </div>
        }
      </div>
    </div>
  );

    // return (
    //   <div>
    //     <div>
    //       {this.state.editMode
    //         ?  <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
    //         :  <span className={s.status} onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
    //       }
    //     </div>
    //   </div>
    // );
};

export default ProfileStatusWithHooks;
