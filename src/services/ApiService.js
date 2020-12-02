import axios from 'axios';
import { settings } from '../data/settings';

export const ApiService = {

  get(action) {
    return axios.get(settings.api + action, this.getAuthHeaders());
  },

  getMultiple(promises) {
    return axios.all(promises, this.getAuthHeaders());
  },

  post(data, action, headers){
    return axios.post(action ? action : settings.formApi, data, headers ? headers : this.getAuthHeaders());
  },

  del(action) {
    return axios.delete(settings.api + action, this.getAuthHeaders());
  },

  patch(action, data) {
    return axios.patch(settings.api + action, data, this.getAuthHeaders());
  },

  getAuthHeaders() {
    //return { headers: { 'authorization': 'bearer ' + localStorage.getItem('ACCESS_TOKEN') } };
  },
}