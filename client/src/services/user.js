import http from "./httpService";
const config = require("../config.json")

const apiEndPoint = config.apiUrl;

export const userRegister = async (user)=>{
   return await http.post(`${apiEndPoint}/register`, user);
}

export const userLogin = async (email, password)=>{
    return await http.post(`${apiEndPoint}/login`, {
        email, password
    })
}

export const userLogout = async()=>{
    return await http.get(`${apiEndPoint}/logout`)
}