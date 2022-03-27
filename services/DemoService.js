import { get } from "./HttpService"
import appConfig from "../configs/appConfig"

const defaultKey = '2293850c-c664-4e6a-8b89-0ac4e05991b7'
const topicsKey = '1fb8f4e1ad6543898ac7a0f34cfe0cc8'

export default {
  getContent: (query, type, key) =>
    fetch(`${appConfig.api}/v1/${type}?apiKey=${key ? key : defaultKey}${query}&truncateContent=255`)
      .then(response => response.json()),
  getContentAll: (query, type, key, size) => {
    const promises = []
    for (let i = 0; i < size; i++) {
      promises.push(
        fetch(`${appConfig.api}/v1/${type}?apiKey=${key ? key : defaultKey}${query}&truncateContent=255&page=${i}&size=100`).then(r => r.json()))
    }

    return Promise.all(promises)

  },
  getCategories: () =>
    fetch(`${appConfig.blogApi}/categories`)
      .then(response => response.json()),
  getTopics: () =>
    fetch(`${appConfig.blogApi}/tags/top?apiKey=${topicsKey}`)
      .then(response => response.json()),
  getImage: ({ domain }) =>
    get(`all?q=${q}&from=${from}&_limit=-1`),
}
