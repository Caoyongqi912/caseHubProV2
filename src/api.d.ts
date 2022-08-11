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
    gender: 1 | 0;
    tag: 0 | 1 | 2 | 3;
    departmentID?: number;
  }

  interface IProject {
    adminID: number;
    create_time: string;
    update_time: string;
    id: number;
    uid: string;
    name: string;
    desc: string | null;
  }

  interface ILoginParams {
    username: string;
    password: string;
  }

  interface IPageProject {
    page?: number;
    limit?: number;
  }


  interface IPageResponse {
    code: number;
    data: any;
    msg: string;
  }


}
