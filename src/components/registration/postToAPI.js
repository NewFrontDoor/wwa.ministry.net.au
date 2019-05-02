import 'es6-promise/auto';
import fetch from 'isomorphic-fetch';

const DRUPAL_WEBFORM_SUBMISSION = "https://webform.newfrontdoor.org/webform_submission/submission";


export function postToWebform(formData, callback){
  fetch(DRUPAL_WEBFORM_SUBMISSION, {
    method: "POST",
    body: formData
  })
  .then(resp => resp.json())
  .then(function(data) {
    callback(data);
  })
  .catch(function(error){
    console.log(error);
  })
}
