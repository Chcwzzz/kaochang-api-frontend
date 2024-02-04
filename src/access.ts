/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { loginUser?: API.LoginUserVO } | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canAdmin: loginUser && loginUser.userRole === 'admin',
  };
}
