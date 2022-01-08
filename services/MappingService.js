import {get} from "./HttpService"

export default {
    findHeadlineMappings: ({ headline, category, topic, medium, page = 0, size = 10 }) =>
      get(`mapping/headline?page=${page}&size=${size}&headline=${headline}&category=${category}&topic=${topic}&medium=${medium}`),

    findUrlMappings: ({ domain, condition, category, topic, medium, page = 0, size = 10 }) =>
      get(`mapping/url?page=${page}&size=${size}&domain=${domain}&condition=${condition}&category=${category}&topic=${topic}&medium=${medium}`),
}
