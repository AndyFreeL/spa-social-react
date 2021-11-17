import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props}) => {
  return (
    <div>
      <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount}
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
