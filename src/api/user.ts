import { request } from 'umi';

/** 登录接口 POST /user/login */
export async function login(
  body: API.ILoginParams,
  options?: { [key: string]: any },
) {
  return request<API.IResponse>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前的用户 GET /user/current */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{ data: API.IUser }>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 模糊搜索用户 GET /users */
export async function searchUser(
  body: API.IMoHuSearchUser,
  options?: { [key: string]: any },
) {
  return request<{ data: API.IUser[] }>('/api/user/search', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
