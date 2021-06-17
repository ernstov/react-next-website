import { get } from "./HttpService";

export default {
    getAllBillingPlans: () => get("billing-plan")
}