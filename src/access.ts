export default function (initialState: API.IUser) {
  return {
    isAdmin: initialState?.isAdmin,
    isRoot: () => true
  }
}
