import * as axios from 'axios'



let instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY': '953f11dc-cc81-4678-b234-09d4abf8c45f'},
})

export const usersAPI ={
 getUsers (currentPage,pageSize) {
  return  instance.get(`users?page=${currentPage}&count=${pageSize}`,
    )
         .then(response => {return response.data})
},
unFollow (userId) {
    return  instance.delete(`follow/${userId}`)
           
  },
follow (userId) {
    return  instance.post(`follow/${userId}`)
           
  },
}


export const authAPI ={
  me(){
      return instance.get('auth/me')
  }
}
export const profileAPI ={
  profile(userId){
      return instance.get(`profile/${userId}`)
      
  }
}
