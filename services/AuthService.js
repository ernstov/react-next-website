import { post } from "./HttpService";

export default {
    signup: body => post("auth/signup", body),
    login: body => post("auth/login", body)
}