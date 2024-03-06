// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** activateInterface POST /admin/userInterfaceInfo/activateInterface */
export async function activateInterfaceUsingPost(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse>('/admin/userInterfaceInfo/activateInterface', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserLeftInvokes GET /admin/userInterfaceInfo/getUserLeftInvokes */
export async function getUserLeftInvokesUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserLeftInvokesUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.UserInterfaceInfo>('/admin/userInterfaceInfo/getUserLeftInvokes', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** invokeUserInterfaceCount POST /admin/userInterfaceInfo/invokeUserInterfaceCount */
export async function invokeUserInterfaceCountUsingPost(
  body: API.UserInterfaceInfo,
  options?: { [key: string]: any },
) {
  return request<boolean>('/admin/userInterfaceInfo/invokeUserInterfaceCount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listInterfaceInfoVOByUserIdPage POST /admin/userInterfaceInfo/list */
export async function listInterfaceInfoVoByUserIdPageUsingPost(
  body: API.InterfaceInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserInterfaceInfoVO_>('/admin/userInterfaceInfo/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
