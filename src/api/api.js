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
        console.warn('Please use profileAPI object')
        return profileAPI.getProfile(userId);
    }
}
export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+ userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status});
    },
    savePhoto(filePhoto){
        const formData = new FormData();
        formData.append("image", filePhoto);

        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
    }

}
export const authAPI = {
    my(){
        return instance.get(`auth/me`)
    },
    login(email, password,rememberMe){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

