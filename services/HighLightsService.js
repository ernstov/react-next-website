import { get } from "./HttpService"
import appConfig from "../configs/appConfig"

export default {
  getHighlight: ({ id }) =>
    fetch(`${appConfig.api}/v1/demo/highlights/${id}`)
      .then(response => response.json()),
  getImage: ({ domain }) =>
    get(`all?q=${q}&from=${from}&_limit=-1`),
}
