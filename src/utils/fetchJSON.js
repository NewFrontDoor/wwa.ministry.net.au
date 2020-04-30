import 'es6-promise/auto';
import fetch from 'isomorphic-fetch';

const DRUPAL_URL = "https://webform.newfrontdoor.org/api/views/";
const DRUPAL_SEARCH_WWA_TALKS = DRUPAL_URL + "wwa_talks_api?display_id=services_1&filters";

//API uses Services and Services views on the drupal 7 instance

export function getFromDrupalAPI(url, callback) {
  if (url.includes('?')) {
    url += '&display_id=services_1';
  }
  else {
    url += '?display_id=services_1'
  }
  fetch(DRUPAL_URL + url)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getTalksByEventID(query, callback) {
  fetch(DRUPAL_SEARCH_WWA_TALKS + '[event]=' + query)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}
