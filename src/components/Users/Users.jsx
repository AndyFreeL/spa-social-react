import React from 'react';
import {setUsersAC} from "../../redux/users-reducer";
import ava from "../../assets/images/avatar.png";

const Users = (props) => {

  if (props.users.length === 0){
    props.setUsers([ {
      id: 1,
      photoUrl: ava,
      followed: false,
      fullname: 'Jay',
      status: 'Talks too much',
      location: {city: 'not here', country: 'not here'}
    },
      {
        id: 2,
        photoUrl: ava,
        followed: true,
        fullname: 'Vader',
        status: 'Power of the dark side',
        location: {city: 'DeathStar', country: 'Galaxy'}
      },
      {
        id: 3,
        photoUrl: ava,
        followed: false,
        fullname: 'SilentBob',
        status: 'silents',
        location: {city: 'not here', country: 'not here'}
      },
      {
        id: 4,
        photoUrl: ava,
        followed: false,
        fullname: 'Homer',
        status: 'D\'oh',
        location: {city: 'Springfield', country: 'US Homer'}
      },])
  }

  return (
    <div>
      {
        props.users.map(u=><div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl}/>
            </div>
            <div>
              {u.followed
                ?  <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                :  <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
        }
    </div>
  );
};

export default Users;
