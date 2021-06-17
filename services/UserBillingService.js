import { post } from "./HttpService";

export default {
    addPlan: body => post("user-plan", body)
}