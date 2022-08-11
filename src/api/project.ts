import { request } from "@@/plugin-request/request";

/** 登录接口 POST /user/login */
export async function pageProject(
  params: any,
  options?: { [key: string]: any }
) {
  return request<API.IResponse>("/api/project/opt", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    ...(options || {})
  });
}


