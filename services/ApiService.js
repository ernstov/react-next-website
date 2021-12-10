import apiConfig from "../configs/apiConfig"
import appConfig from "../configs/appConfig"
import moment from "moment"
import { cutOffString, diffTimeString, dateFormat } from "../utils";

const ApiService = {

  async getTags() {
    return Promise.all(apiConfig.tagsRequests.map((request, i) =>
      fetch(`${apiConfig.api}${request.api}`).then(resp => resp.json())
    ))
  },

  async getArticlesByType(type, field, start) {
    try {
      const res = await fetch(`${apiConfig.api}/articles?type=${type}&_sort=published_at:desc&_limit=${appConfig.limit}&_start=${start ? start : 0}`)
      const resJson = await res.json()
      const contents = resJson?.length > 0 && resJson.map(item => {
        return parseArticles(item)
      }).filter(item => item.img && item)

      return new Promise((resolve) => {
        resolve({ field: field, contents: contents } ?? {});
      });
    } catch (e) {
      console.log(e);
      throw (e);
    }
  },

  async getArticlesByTag(tag, field, start, isAll) {
    try {
      const url = isAll ? `${apiConfig.api}/articles/?` : `${apiConfig.api}/articles?tags.name=${tag}&`
      const res = await fetch(`${url}_sort=published_at:desc&_start=${start ? start : 0}&_limit=${appConfig.limit}`)
      const resJson = await res.json()
      const contents = resJson?.length > 0 && resJson.map(item => {
        return parseArticles(item)
      }).filter(item => item.img && item)

      return new Promise((resolve) => {
        resolve({ field: field, contents: contents } ?? {});
      });
    } catch (e) {
      console.log(e);
      throw (e);
    }
  },

  async getHeadlines(field, start, offset) {

    const now = offset && offset != 0 ? moment.utc().subtract(offset, "hours") : moment.utc();
    const endTime = now.format('YYYY-MM-DDTHH:00:00')
    const startTime = now.subtract(8, "hours").format('YYYY-MM-DDTHH:00:00')

    try {
      const res = await fetch(`${apiConfig.api}/articles/headlines?startTime=${startTime}` + `&endTime=${endTime}&_start=${start ? start : 0}&_limit=${appConfig.limit}&_sort=published_at:desc`)
      const resJson = await res.json()
      const contents = resJson && resJson.length > 0 && resJson.map(item => {
        return parseArticles(item)
      }).filter(item => item.img && item)

      return new Promise((resolve) => {
        resolve({ field: field, contents: contents } ?? {});
      });
    } catch (e) {
      console.log(e);
      throw (e);
    }
  },

  async getArticleById(id) {
    try {
      const url = `${apiConfig.api}/getarticle/${id}`
      const res = await fetch(`${url}`)
      const resJson = await res.json()
      const contents = resJson

      resJson.related_articles = resJson.related_articles?.length > 0 ? resJson.related_articles.map((article) => parseArticles(article)) : null

      if (!resJson.related_articles && resJson?.tags?.length > 0) {
        const urlT = `${apiConfig.api}/articlesByTag/${resJson?.tags[0].id}?_limit=20`
        const resT = await fetch(`${urlT}`)
        const resJsonT = await resT.json()

        resJson.recent_articles = resJsonT.articles.map((article) => parseArticles(article))
      }

      return new Promise((resolve) => {
        resolve({ contents: contents } ?? {});
      });
    } catch (e) {
      console.log(e);
      throw (e);
    }
  },

  async getPages() {
    const t = new Date();
    const today = dateFormat(t, "yyyy-mm-dd");
    const yestarday = dateFormat(t.setDate(t.getDate() - 1), "yyyy-mm-dd");

    const requests = [
      `/tags/trending?cat=person&startTime=${yestarday}T00:00:00&endTime=${today}T23:59:59`,
      `/tags/trending?cat=time&subcat=event&startTime=${yestarday}T00:00:00&endTime=${today}T23:59:59`,
      `/tags/trending?cat=org&subcat=business&startTime=${yestarday}T00:00:00&endTime=${today}T23:59:59`,
      `/tags/trending?cat=broad&startTime=${yestarday}T00:00:00&endTime=${today}T23:59:59`,
      `/blogs`,
      `/pages`
    ]

    return Promise.all(
      requests.map((rg) => {
        return fetch(`${appConfig.api}${rg}`, {
          method: "GET",
        })
      }),
    )
  },

  async getArticles() {
    const res = await fetch(`${appConfig.blogApi}/blogs?_sort=created_at:DESC`)
    return res.json()
  },

  async getArticle(alias) {
    const res = await fetch(`${appConfig.blogApi}/blogs?alias=${alias}`)
    return res.json()
  },

  async getPage(page) {
    const res = await fetch(`${appConfig.blogApi}/pages?alias=${page}`)
    return res.json()
  }
}

export const getDataByType = async (type, field, start, offset) => {
  switch (type) {
    case "Headlines":
      return ApiService.getHeadlines(field, start, offset);
    default:
      return ApiService.getArticlesByType(type, field, start);
    case "Coronavirus":
    case "Local News":
      return ApiService.getArticlesByTag(type, field, start);
    case "All content":
      return ApiService.getArticlesByTag(type, field, start, true);
  }
}

const parseArticles = (item) => {
  return {
    id: item.id,
    headline: cutOffString(item.headline),
    date: diffTimeString(moment(item.created_at).fromNow()),
    source: item.source?.name ? item.source.name : null,
    sourceLogo: item.source?.logoFavIcon?.url ? item.source.logoFavIcon.url : null,
    overallBiasRating: item.source?.overallBiasRating ? item.source?.overallBiasRating : null,
    medium: item.medium ? item.medium : null,
    img: item.image,
    label: item.type,
    url: item.url,
    total_related_count: item.total_related_count ? item.total_related_count : null,
    related_article: item.related_article ? {
      headline: cutOffString(item.related_article?.headline),
      date: diffTimeString(moment(item.related_article?.created_at).fromNow()),
      source: item.related_article?.source?.name,
      sourceLogo: item.related_article?.source?.logoFavIcon?.url,
      img: item.related_article?.image,
      label: item.related_article?.type,
      url: item.related_article?.url,
    } : null,
    review_votes: item.review_votes ? item.review_votes : null,
    comment: {
      author: "",
      avatar: "",
      content: "",
    }
  }
}

export default ApiService;