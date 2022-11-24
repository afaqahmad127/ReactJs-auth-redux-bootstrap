import { HomePage, ProfilePage } from './pages';

const authenticatedRoutes = [
  {
    key: 0,
    path: '/',
    element: HomePage,
  },
  {
    key: 1,
    path: '/profile',
    element: ProfilePage,
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
