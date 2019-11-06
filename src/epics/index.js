import { combineEpics } from "redux-observable";
import { Observable } from "rxjs";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import { of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { FETCH_LOGIN, fetchLoginSuccess, fetchLoginFailure } from "../actions";
import { ajaxPostService } from "../services/api";

const url = "/api/login";
const body = {
  grant_type: "password",
  client_id: "web",
  client_secret: "web-client",
  scope: "basic"
};

const fetchLoginEpic = action$ => {
  return action$
    .ofType(FETCH_LOGIN) // ofType(FETCH_LOGIN) is just a simpler version of .filter(x => x.type === FETCH_LOGIN)
    .switchMap(data => {
      const { email, password } = data.payload;
      const updatedBody = Object.assign(body, {
        username: email,
        password
      });
      const ajaxPost = ajaxPostService(url, updatedBody);
      return ajaxPost.pipe(
        map(result => fetchLoginSuccess(result)),
        catchError(error =>
          Observable.of(fetchLoginFailure(error.response.errors[0].message))
        )
      );
    });
};

export const rootEpic = combineEpics(fetchLoginEpic);
