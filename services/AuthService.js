import { post, get } from "./HttpService";

export default {
    signup: body => post("auth/signup", body),
    login: body => post("auth/login", body),
    logout: () => get("auth/logout"),
    verifyEmail: token => get(`auth/verifyEmail?token=${token}`)
}
