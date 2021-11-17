import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
  return (
    <div>
      <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount}
                 pageSize={pageSize} onPageChanged={onPageChanged}/>
      <div>
      {
        users.map(u => <User followingInProgress={props.followingInProgress}
                             unfollow={props.unfollow}
                             follow={props.follow}
                             user={u}
                             key={u.id}/>
        )
      }
      </div>
    </div>
  );
};

export default Users;
