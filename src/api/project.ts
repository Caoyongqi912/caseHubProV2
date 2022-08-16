import { request } from '@@/plugin-request/request';

/** 登录接口 POST /user/login */
export async function pageProject(
  params: API.IPageProject,
  options?: { [key: string]: any },
) {
  console.log(params);
  const p = {
    pageSize: params.pageSize,
    current: params.current,
    sort: Object.keys(params.sort)[0] || null,
    filter: params.filter,
  };
  console.log('p', p);
  return request<API.IPageResponse>('/api/project/opt', {
    method: 'GET',
    params: p,
    ...(options || {}),
  });
}
