import React from 'react';
import ava from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, unfollow, follow}) => {
  return (
      <div>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
              <img src={user.photos.small != null ? user.photos.small : ava}/>
                </NavLink>
            </div>
            <div>
              {user.followed
                ? <button disabled={followingInProgress
                  .some(id => id === user.id)} onClick={() => {
                  unfollow(user.id)
                }}>Unfollow</button>
                : <button disabled={followingInProgress
                  .some(id => id === user.id)} onClick={() => {
                  follow(user.id)
                }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{'user.location.country'}</div>
              <div>{'user.location.city'}</div>
            </span>
          </span>
        </div>
  );
};

export default User;
