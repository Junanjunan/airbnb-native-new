import axios from "axios";

const CallApi = async(method, path, data, jwt) => {
    const headers = {
        Authorization: jwt,
        "Content-Type": "application/json"
    };
    const baseUrl = "https://6929-59-6-83-159.jp.ngrok.io/api/v1";
    const fullUrl = `${baseUrl}${path}`;
    if(method === "get" || method === "delete"){
        return axios[method](fullUrl, {headers});
    } else{
        return axios[method](fullUrl, data, {headers});
    }
};

export const createAccount = form => CallApi("post", "/users/", form);