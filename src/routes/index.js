import {
    Home,
    Hbogo,
    Channel,
    Category,
    Sport,
    Login,
    Register,
    ForgotPassword,
    ServicePack,
    PageElement,
    serviceRegistration,
    CartPage,
    Warning404,
    ProDetailPage,
} from '~/pages';

//  Public router
const PublicRoutes = [
    { path: '/danh-muc/:categoryItem', component: Category, Layout: null },
    { path: '/gio-hang', component: CartPage, Layout: null },
    { path: '/dang-nhap', component: Login, Layout: null },
    { path: '/dang-ky', component: Register, Layout: null },
    { path: '/gau-bong/:slugPro/:idPro', component: ProDetailPage, Layout: null },

    { path: '/tim-kiem', component: PageElement, Layout: null },
    { path: '/danh-sach', component: Category, Layout: null },
    { path: '/the-thao', component: Sport, Layout: null },
    { path: '/quen-mat-khau', component: ForgotPassword, Layout: null },
    { path: '/goi-dich-vu', component: ServicePack, Layout: null },
    { path: '/dang-ky-dich-vu', component: serviceRegistration, Layout: null },
    { path: '/', component: Home, Layout: null },
    { path: '/*', component: Warning404, Layout: null },
];

//  Private router
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
