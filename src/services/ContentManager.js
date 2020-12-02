import { ApiService } from "./ApiService";
import axios from 'axios';

const ContentManager = ({ dispatchPages, dispatchNotifi }, callback) => {

  const requests = [
    `/tags/trending?cat=person&startTime=2020-11-17T00:00:00&endTime=2020-11-18T23:59:59`,
    `/tags/trending?cat=time&subcat=event&startTime=2020-11-17T00:00:00&endTime=2020-11-18T23:59:59`,
    `/tags/trending?cat=org&subcat=business&startTime=2020-11-17T00:00:00&endTime=2020-11-18T23:59:59`,
    `/tags/trending?cat=broad&startTime=2020-11-17T00:00:00&endTime=2020-11-18T23:59:59`
  ]

  let promises = [];

  for (let i = 0; i < requests.length; i++) {
    promises.push(ApiService.get(requests[i]));
  }

  ApiService.getMultiple(promises).then(axios.spread((...results) => {

    dispatchPages({ type: "SET_PAGE", data: { trands: results } });
    if(callback) callback();
  }), error => {
    dispatchNotifi({ type: "ERROR", data: { error: error } })
  })
}

export default ContentManager;