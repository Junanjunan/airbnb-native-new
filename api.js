import axios from "axios";

const CallApi = async(method, path, data, jwt) => {
    const headers = {
        Authorization: jwt,
        "Content-Type": "application/json"
    };
    const baseUrl = "https://251a-121-130-89-81.jp.ngrok.io/api/v1";
    const fullUrl = `${baseUrl}${path}`;
    if(method === "get" || method === "delete"){
        return axios[method](fullUrl, {headers});
    } else{
        return axios[method](fullUrl, data, {headers});
    }
};

// export const createAccount = form => CallApi("post", "/users/", form);
// export const login = form => CallApi("post", "/users/login", form);

export default{
    createAccount: form => CallApi("post", "/users/", form),
    login: form => CallApi("post", "/users/login/", form),
    rooms: page => CallApi("get", `/rooms/?page=1`)
}