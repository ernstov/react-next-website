import { get, post, put } from "./HttpService";

export default {
    // addPlan: body => post("user-plan", body),
    getUser: () => get("user"),
    updateUser: body => put("user", body),
    updatePassword: body => put("user/password", body),
    // getUserPlan: () => get("user-plan"),
    updatePlan: body => put("user/plan", body),
    getBilling: ({ numTransactions = 7 } = {}) => get(`user/billing?numTransactions=${numTransactions}`)
}
