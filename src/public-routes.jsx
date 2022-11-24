import { LoginPage, SignUpPage } from './pages';

const authenticatedRoutes = [
  {
    key: 0,
    path: '/',
    element: LoginPage,
  },
  {
    key: 1,
    path: '/signup',
    element: SignUpPage,
  },
];

function withNavigationWatcher(Component, path) {
  const WrappedComponent = function (props) {
    return <Component {...props} />;
  };
  return <WrappedComponent />;
}
export default authenticatedRoutes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
