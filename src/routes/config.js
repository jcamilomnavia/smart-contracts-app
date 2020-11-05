const routes = [
  {
    path: '/',
    component: () => null,
    exact: true,
  },
  {
    name: '404',
    path: '*',
    component: () => null,
  },
];

export default routes;
