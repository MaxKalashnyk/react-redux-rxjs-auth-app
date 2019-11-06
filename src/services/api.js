import { ajax } from "rxjs/observable/dom/ajax";

export const ajaxPostService = (url, body) => {
  return ajax({
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body
  });
};
