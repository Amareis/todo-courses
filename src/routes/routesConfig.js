import MainPage from '@containers/MainPage'
import UsersPage from '@containers/UsersPage'
import NotFoundPage from '@containers/NotFoundPage'
import OrganizationsPage from '@containers/OrganizationsPage'

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: MainPage
  },
  {
    path: '/users',
    exact: true,
    component: UsersPage
  },
  {
    path: '/organizations',
    exact: true,
    component: OrganizationsPage
  },
  {
    path: '*',
    exact: false,
    component: NotFoundPage
  }
]

export default routesConfig