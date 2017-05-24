import axios from 'axios';
import queryString from 'query-string';

export const SERVER = process.env.SHOPSERVER;

function decideRequest(prom, resolve, reject) {
  prom.then( res => res && res.data && res.data.success ? resolve(res.data) : reject(res && res.data && res.data.message)).catch( err => reject(err));
}

function addJsonParams(url, data) {
  let separator = (url.indexOf('?') === -1)?'?':'&';
  return url + separator + queryString.stringify(data);
}

export default function request ({method, url, headers, baseURL, data}) {
  if (!method || method === "GET") {
    data = data || {};
    url = addJsonParams(url, data);
  }
  return new Promise(function(resolve, reject){
    let axiosPromise = axios({
      method: method || "GET",
      baseURL: baseURL || SERVER,
      url,
      data,
      headers: Object.assign({
        "Authorization": process.env.AUTH_BEARER_SHOP
      }, headers)
    });
    decideRequest(axiosPromise, resolve, reject);
  });
}
