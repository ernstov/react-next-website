import { get } from "./HttpService"
import appConfig from "../configs/appConfig"

const defaultKey = '2293850c-c664-4e6a-8b89-0ac4e05991b7'
const topicsKey = '1fb8f4e1ad6543898ac7a0f34cfe0cc8'

export default {
  getContent: (query, type, key) => 
    fetch(`${appConfig.api}/v1/${type}?apiKey=${key ? key : defaultKey}${query}&truncateContent=255`)
      .then(response => response.json()),
  getCategories: () =>
    fetch(`${appConfig.blogApi}/categories`)
      .then(response => response.json()),
  getTopics: () =>
    fetch(`${appConfig.blogApi}/tags/top?apiKey=${topicsKey}`)
      .then(response => response.json()),
  getImage: ({ domain }) =>
    get(`all?q=${q}&from=${from}&_limit=-1`),
}
