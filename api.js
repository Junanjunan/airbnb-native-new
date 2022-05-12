import axios from "axios";

const callApi = async (method, path, data, jwt) => {
    const headers = {
        Authorization: `Bearer ${jwt}`,
        // Authorization: jwt,
        "Content-Type": "application/json"
    };
    const baseUrl = "https://2994-175-193-30-191.jp.ngrok.io/api/v1";
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
    rooms: (page=1, token) => callApi("get", `/rooms/?page=${page}`, null, token),
    favs: (id, token) => callApi("get", `/users/${id}/favs/`, null, token),
    toggleFavs: (userId, roomId, token) => callApi("put", `/users/${userId}/favs/`, {pk:roomId}, token)
}