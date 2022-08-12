import { request } from '@@/plugin-request/request';

/** 登录接口 POST /user/login */
export async function pageProject(
  page: API.IPageProject,
  options?: { [key: string]: any },
) {
  console.log(page);

  const pages = {
    limit: page.params.pageSize,
    page: page.params.current,
    // by: page.sort
    // filter: page.filter
  };
  console.log(pages);
  return request<API.IResponse>('/api/project/opt', {
    method: 'GET',
    params: pages,
    ...(options || {}),
  });
}
