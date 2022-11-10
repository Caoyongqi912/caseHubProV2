import { request } from "umi";

/** 登录接口 POST /user/login */
export async function login(
  body: API.ILoginParams,
  options?: { [key: string]: any }
) {
  return request<API.IResponse>("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** 获取当前的用户 GET /user/current */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{ data: API.IUser }>("/api/user/current", {
    method: "GET",
    ...(options || {})
  });
}


interface IUser {
  id: number;
  username: string;
  uid: string;
}

interface IQueryUser {
  code: number;
  data: Array<IUser>;
  msg: string;
}

/** 获取当前的用户 GET /user/query */
export async function queryUser(options?: { [key: string]: any }) {
  return request<{ data: IQueryUser }>("/api/user/opt", {
    method: "GET",
    ...(options || {})
  });
}

/** 模糊搜索用户 GET /users */
export async function searchUser(
  body: API.IMoHuSearchUser,
  options?: { [key: string]: any },
) {
  return request<{ data: API.IPageResponse }>('/api/user/search', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
