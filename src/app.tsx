import {RequestConfig} from "umi";
import {getToken} from "@/utils/token";
import {history} from 'umi';
import {currentUser} from "@/api/user";
// @ts-ignore
import defaultSettings from '../config/defaultSettings';
import {PageLoading, SettingDrawer} from '@ant-design/pro-components';
import {RunTimeLayoutConfig} from "umi";
import {BasicLayoutProps, Settings as LayoutSettings} from '@ant-design/pro-layout';

const loginPath = '/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading/>,
};


export async function getInitialState(): Promise<{
  currentUser?: API.IUser
  loading?: boolean
  fetchUserInfo?: () => Promise<API.IUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const res = await currentUser();
      return res.data
    } catch (error) {
      history.push(loginPath)
    }
    return undefined
  }
  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      // settings: defaultSettings,

    };
  }
  return {
    fetchUserInfo,
    // setting:defaultSettings
  }
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({initialState, setInitialState}) => {
  return {
    // rightContentRender: () => <RightContent/>,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.username,
    },
    // footerRender: () => <Footer/>,
    onPageChange: () => {
      const {location} = history;
      console.log(location.pathname);
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    // 自定义 403 页面
    unAccessible: <div>unAccessible</div>,
    childrenRender: (children,props) => {
      if (initialState?.loading) return <PageLoading />;

      return <div>{children}</div>;
    },
  };
};


const authHeaderInterceptor = (url: string, options: RequestConfig) => {
  const token = getToken()
  if (token !== null) {
    const authHeader = {Authorization: 'Basic ' + btoa(token + ':' + '')};
    return {
      url: `${url}`,
      options: {...options, interceptors: true, headers: authHeader},
    };
  }
  return {
    url: `${url}`,
    options: {...options, interceptors: true},
  };
};

const demoResponseInterceptors = (response: Response, options: RequestConfig) => {
  return response;
};

export const request: RequestConfig = {
  requestInterceptors: [authHeaderInterceptor],
  responseInterceptors: [demoResponseInterceptors],
};
