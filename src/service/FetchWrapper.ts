// import { getToken } from "./TokenService";
// import { isLogin } from "./LoginService";
import fetch from "node-fetch";
// import { FrontView } from "../type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isServer = !(process as any).browser;

export const fetchWrapper = <T>(path, options): Promise<T> => {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: "application/json",
  };
  if (options.contentType === "json") headers["Content-Type"] = "application/json; charset=utf-8";
  // if (isLogin()) headers["Authorization"] = "Bearer " + getToken();

  return new Promise<T>((resolve, reject) => {
    if (isServer) {
      fetch(`${process.env.apiUrl}${path}`, {
        headers,
        mode: "cors",
        ...options,
      })
        .then(_checkStatus)
        .then(_extractBodyJson)
        .then((body) => {
          resolve(body);
        })
        .catch(async (e) => {
          if (e instanceof TypeError) {
            // eslint-disable-next-line no-console
            console.error(e);
            reject({ data: null, error: e });
          } else {
            const errorBody = await e.body;
            // eslint-disable-next-line no-console
            console.error(errorBody);
            reject(errorBody);
          }
        });
    } else {
      fetch(`${process.env.apiUrl}${path}`, {
        headers,
        mode: "cors",
        ...options,
      })
        .then(_checkStatus)
        .then(_extractBodyJson)
        .then((body) => {
          resolve(body);
        })
        .catch(async (e) => {
          if (e instanceof TypeError) {
            // eslint-disable-next-line no-console
            console.error(e);
            reject({ data: null, error: e });
          } else {
            const errorBody = await e.body;
            // eslint-disable-next-line no-console
            console.error(errorBody);
            reject(errorBody);
          }
          // const statusCode = Number(String(e.body.status).slice(0, 3));
          // if (statusCode >= 500) {
          //   navStore.setFrontView(
          //     FrontView.Errors,
          //     {
          //       visible: true,
          //       clickable: false,
          //     },
          //     { reload: true },
          //   );
          // }
        });
    }
  });
};

export const json2query = (json) => {
  if (json) {
    let queryString = "?";
    Object.keys(json).forEach((key) => {
      queryString += key + "=" + json[key] + "&";
    });
    return queryString;
  }
  return "";
};

export const get = async <T>(path, query = null): Promise<T> => {
  const queryString = json2query(query);
  const res = await fetchWrapper<T>(`${path}${queryString}`, { method: "GET" });
  return res;
};

export const post = async <T>(path, data = {}) => {
  const res = await fetchWrapper<T>(`${path}`, {
    method: "POST",
    body: JSON.stringify(data),
    contentType: "json",
  });
  return res;
};

export const put = async <T>(path, data = {}) => {
  const res = await fetchWrapper<T>(`${path}`, {
    method: "PUT",
    body: JSON.stringify(data),
    contentType: "json",
  });
  return res;
};

export const del = async <T>(path, data = {}) => {
  const res = await fetchWrapper<T>(`${path}`, {
    method: "DELETE",
    body: JSON.stringify(data),
    contentType: "json",
  });
  return res;
};

const _checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    // eslint-disable-next-line no-console
    console.error(res);
    throw { status: res.status, body: res.json() };
  }
};

const _extractBodyJson = (res) => {
  return res.status !== 204 ? res.json() : {};
};
