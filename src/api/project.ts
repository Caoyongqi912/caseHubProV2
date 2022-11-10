import { request } from '@@/plugin-request/request';

const ProjectURL: string = '/api/project/opt';

/** 项目 GET /project */
export async function pageProject(
  params: API.IPageProject,
  options?: { [key: string]: any },
) {
  const p = {
    pageSize: params.pageSize,
    current: params.current,
    sort: Object.keys(params.sort)[0] || null,
    filter: params.filter,
  };
  return request<API.IPageResponse>(ProjectURL, {
    method: 'GET',
    params: p,
    ...(options || {}),
  });
}

/** 项目 POST /project */
export async function newProject(
  data: API.INewProject,
  options?: { [key: string]: any },
) {
  console.log(data);
  return request<API.IPageResponse>(ProjectURL, {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}
