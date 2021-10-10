import * as axios from 'axios'



let instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY': '97a1d3b2-4fba-45af-992b-d246cd06607c'},
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
