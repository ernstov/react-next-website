import { get } from "./HttpService";

export default {
    getAllBillingPlans: () => get("plans")
}
