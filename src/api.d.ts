declare namespace API {
  interface IResponse {
    code: number
    data?: any
    msg: string
  }

  interface IUser {
    id: number
    username: string
    isAdmin: boolean
  }

  interface ILoginParams {
    username: string
    password: string
  }


}
