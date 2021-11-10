import Loadable from 'react-loadable';

const DashboardContainer = Loadable({
  loader: () => import('views/containers/dashboard'),
  loading: () => null,
});

const AuthContainer = Loadable({
  loader: () => import('views/containers/auth'),
  loading: () => null,
});

const Dashboard = Loadable({
  loader: () => import('views/screens/dashboard'),
  loading: () => null,
});

const Login = Loadable({
  loader: () => import('views/screens/login'),
  loading: () => null,
});

const Register = Loadable({
  loader: () => import('views/screens/register'),
  loading: () => null,
});

const Offers = Loadable({
  loader: () => import('views/screens/offers'),
  loading: () => null,
});

const History = Loadable({
  loader: () => import('views/screens//history'),
  loading: () => null,
});

const HistoryDetail = Loadable({
  loader: () => import('views/screens/history-detail'),
  loading: () => null,
});

const Buy = Loadable({
  loader: () => import('views/screens/buy'),
  loading: () => null,
});

const routes = [
  {
    path: '/',
    component: AuthContainer,
    published: true,
    exact: true,

    routes: [
      {
        path: '/',
        component: Login,
        exact: true,
        published: true,
      },
    ],
  },
  {
    path: '/register',
    component: AuthContainer,
    published: true,
    exact: true,
    routes: [
      {
        path: '/register',
        component: Register,
        exact: true,
        published: true,
      },
    ],
  },
  {
    path: '/app',
    component: DashboardContainer,
    // exact: true,
    routes: [
      {
        path: '/app',
        component: Dashboard,
        published: true,
        exact: true,
      },
      {
        path: '/app/profile',
        component: () => null,
        published: true,
        exact: true,
      },
      {
        path: '/app/history/:id',
        component: HistoryDetail,
        published: true,
        exact: true,
      },
      {
        path: '/app/history',
        component: History,
        published: true,
        exact: true,
      },
      {
        path: '/app/offers',
        component: Offers,
        published: true,
        exact: true,
      },
      {
        path: '/app/offers/:id',
        component: Buy,
        published: true,
        exact: true,
      },
    ],
  },
  {
    name: '404',
    path: '*',
    component: () => null,
  },
];

export default routes;
