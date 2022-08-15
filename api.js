import axios from "axios";

const callApi = async (method, path, data, jwt, params) => {
    const headers = {
        // Authorization: `Bearer ${jwt}`,
        Authorization: jwt,
        "Content-Type": "application/json"
    };
    const baseUrl = "https://49c5-112-187-140-235.jp.ngrok.io/api/v1";
    const fullUrl = `${baseUrl}${path}`;
    if(method === "get" || method === "delete"){
        return axios[method](fullUrl, {headers, params});
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
    toggleFavs: (userId, roomId, token) => callApi("put", `/users/${userId}/favs/`, {pk:roomId}, token),
    search: (form, token) => callApi("get", "/rooms/search/", null, token, form)
}