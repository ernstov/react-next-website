import { get, post, put, remove } from "./HttpService";

export default {
    // addPlan: body => post("user-plan", body),
    getUser: () => get("user"),
    updateUser: body => put("user", body),
    updatePassword: body => put("user/password", body),
    // getUserPlan: () => get("user-plan"),
    updatePlan: body => put("user/plan", body),
    setupIntent: () => get("user/setupIntent"),
    updatePaymentMethod: body => put("user/paymentMethod", body),
    deletePlan: () => remove("user/plan"),
    getBilling: ({ numTransactions = 7 } = {}) => get(`user/billing?numTransactions=${numTransactions}`)
}
