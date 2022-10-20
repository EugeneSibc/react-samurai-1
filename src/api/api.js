import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key':'b39fb66e-f52f-4ced-af0c-ebb35a06eaaa'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data;
            })
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response =>{
                return response.data;
            })
    },
    follow(userId){
        return instance.post(`follow/` + userId)
            .then(response =>{
                return response.data;
            })
    },
    getProfile(userId){
        return instance.get(`profile/`+ userId)
    }
}

export const authAPI = {
    my(){
        return instance.get(`auth/me`)
    }
}

