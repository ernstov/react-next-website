// const TOKEN = "CT_TOKEN";

// export function getToken() {
//   return localStorage.getItem(TOKEN) || "";
// }

// export function setToken(token) {
//   return localStorage.setItem(TOKEN, token);
// }

// export function getCurrentUserData() {
//   if (localStorage.getItem(TOKEN)) {
//     const token = localStorage.getItem(TOKEN);
//     const base64Url = token.split('.')[1];
//     const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
//       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));

//     return JSON.parse(jsonPayload);
//   }
//   return {};
// }
