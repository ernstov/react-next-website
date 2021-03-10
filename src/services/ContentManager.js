import { ApiService } from "./ApiService";
import axios from 'axios';
import { settings } from "../data/settings";
import {dateFormat} from "../utils";

const ContentManager = ({ dispatchPages, dispatchNotifi }, callback) => {

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

  let promises = [];

  for (let i = 0; i < requests.length; i++) {
    promises.push(ApiService.get(requests[i]));
  }

  ApiService.getMultiple(promises).then(axios.spread((...results) => {

    dispatchPages({ type: "SET_PAGE", data: { trands: results.slice(0,4), blog: results.slice(4,5)[0].data } });
    if(callback) callback();
  }), error => {
    dispatchNotifi({ type: "ERROR", data: { error: error } })
  })
}

export const PagesManager = (page , callback) => {

  const request = `/pages?alias=${page}`;

  return ApiService.get(request);
}

export default ContentManager;