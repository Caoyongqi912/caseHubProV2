declare namespace API {
  interface IResponse {
    code: number;
    data?: any;
    msg: string;
  }

  interface IUser {
    id: number;
    username: string;
    isAdmin: boolean;
    avatar?: string;
  }

  interface ILoginParams {
    username: string;
    password: string;
  }
}
