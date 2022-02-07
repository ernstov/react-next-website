import {post} from "./HttpService"

export default {
  getAllUsers: (body) => post(`internal/users`, body),
}
