import { post } from "./HttpService";

export default {
    contact: body => post("contact", body)
}
