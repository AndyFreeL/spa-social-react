import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API-KEY": "b8f970ca-f723-4737-87c8-b60246c85996"}
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(userId){
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId){
    return instance.delete(`follow/${userId}`)
  }
}

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`/profile/` + userId)
      .then(response => response.data);
  }
}
