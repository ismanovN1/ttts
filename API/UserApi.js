import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "d6702e21-d996-4249-9007-cab953e42895"},
});

export const UserApi = {
    getUser(value) {
        return instance.get(`users?page=${value}&count=10`).then(response => {
            return response.data
        })
    },
    followPost(value) {
        return instance.post('follow/' + value, {})
    },
    followDelete(value) {
        return instance.delete('follow/' + `${value}`)
    },
}

export const profilApi = {
    setAvaPhoto(file) {
        let data = new FormData();
        data.append('file', file);
        return instance.put('profile/photo', data)
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    setStatus(status) {
        return instance.put('profile/status', {status: status})
    },
    setInform(info) {
        return instance.put('profile',info)
    }

}

export const authLoginApi = {
    getLogin() {
        return instance.get('auth/me').then(response => response.data)
    },
    setLogin(UserData) {
        return instance.post('auth/login', UserData)
    },
    deleteLogin() {
        return instance.delete('auth/login')
    },
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url').then(response => response.data)
    },
}
