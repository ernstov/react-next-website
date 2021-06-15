const TOKEN = "CT_TOKEN";

export function getToken() {
    return localStorage.getItem(TOKEN) || "";
}

export function setToken(token) {
    return localStorage.setItem(TOKEN, token);
}