import { Home } from '~/pages';

//  Public router
const PublicRoutes = [{ path: '/', component: Home, Layout: null }];

//  Private router
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
