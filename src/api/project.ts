import { request } from '@@/plugin-request/request';

const ProjectURL: string = '/api/project/opt';

/** 项目 GET /project */
export async function pageProject(
  params: API.ISearch,
  options?: { [key: string]: any },
) {
  const p = {
    pageSize: params.pageSize,
    current: params.current,
    filter: { uid: params.uid },
  };
  return request<API.IResponse>(ProjectURL, {
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
  return request<API.IResponse>(ProjectURL, {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}
