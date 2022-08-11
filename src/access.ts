export default function (initialState: { currentUser: API.IUser } | undefined) {
  const { currentUser } = initialState ?? {};
  console.log('=====isAdmin', currentUser?.isAdmin);
  return {
    isAdmin: currentUser && currentUser.isAdmin,
  };
}
