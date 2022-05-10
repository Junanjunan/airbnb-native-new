import axios from "axios";

const callApi = async(method, path, data, jwt) => {
    const headers = {
        Authorization: jwt,
        "Content-Type": "application/json"
    };
    const baseUrl = "https://7bf4-112-187-140-235.jp.ngrok.io/api/v1";
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
    createAccount: form => callApi("post", "/users/", form),
    login: form => callApi("post", "/users/login/", form),
    rooms: page => callApi("get", `/rooms/?page=1`)
}