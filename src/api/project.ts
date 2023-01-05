import { request } from '@@/plugin-request/request';

const ProjectURL: string = '/api/project/opt';
const ProjectSearchURL: string = '/api/project/search';

/** 项目 GET /project */
export async function pageProject(
  params: API.ISearch,
  options?: { [key: string]: any },
) {
  return request<API.IResponse>(ProjectURL, {
    method: 'GET',
    params: params,
    ...(options || {}),
  });
}

/** 项目 POST /project */
export async function newProject(
  data: API.INewOrUpdateProject,
  options?: { [key: string]: any },
) {
  console.log(data);
  return request<API.IResponse>(ProjectURL, {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}

/** 项目 PUT /project */
export async function updateProject(
  data: API.INewOrUpdateProject,
  options?: { [key: string]: any },
) {
  console.log(data);
  return request<API.IResponse>(ProjectURL, {
    method: 'PUT',
    data: data,
    ...(options || {}),
  });
}
