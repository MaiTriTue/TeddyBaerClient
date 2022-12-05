import { Home, Category, Login, Register, CartPage, Warning404, ProDetailPage, Blog, Contact, Endow } from '~/pages';
import BlogPost from '~/pages/BlogPost';

//  Public router
const PublicRoutes = [
    { path: '/danh-muc/:categoryItem', component: Category, Layout: null },
    { path: '/gio-hang', component: CartPage, Layout: null },
    { path: '/dang-nhap', component: Login, Layout: null },
    { path: '/dang-ky', component: Register, Layout: null },
    { path: '/blog', component: Blog, Layout: null },
    { path: '/blog/:postName/:postId', component: BlogPost, Layout: null },
    { path: '/lien-he', component: Contact, Layout: null },
    { path: '/uu-dai', component: Endow, Layout: null },
    { path: '/gau-bong/:slugPro/:idPro', component: ProDetailPage, Layout: null },
    { path: '/', component: Home, Layout: null },
    { path: '/*', component: Warning404, Layout: null },
];

//  Private router
const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
