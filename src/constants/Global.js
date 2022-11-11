import images from '~/assets/images';

export const PHOTO_CATEGORY_OPTIONS = [
    { value: 1, label: 'Technolory' },
    { value: 2, label: 'Python' },
    { value: 3, label: 'Javascript' },
    { value: 4, label: 'HTML' },
    { value: 5, label: 'CSS' },
];

export const dataBillBeard = [
    {
        id: 1,
        name: ' booque',
        description: 'Bông tự nhiên',
        image: images.billBeard02,
    },
    {
        id: 2,
        name: ' booque02',
        description: 'Bông tự nhiên',
        image: images.billBeard02,
    },
    {
        id: 3,
        name: ' booque03',
        description: 'Bông tự nhiên',
        image: images.billBeard02,
    },
];

export const CATEGORY_DATAS = [
    {
        name: 'Gấu Bông',
        icon: images.gauBong01,
        link: '/danh-muc/gau-bong',
    },
    {
        name: 'Thú Bông',
        icon: images.thuBong01,
        link: '/danh-muc/thu-bong',
    },
    {
        name: 'Gấu Bông Hoạt Hình',
        icon: images.gauBongHoatHinh,
        link: '/danh-muc/gau-bong-hoat-hinh',
    },
    {
        name: 'Gối Bông & Phụ Kiện',
        icon: images.goibong,
        link: '/danh-muc/goi-bong',
    },
    {
        name: 'Hoa Hồng Sáp ( bó )',
        icon: images.hongSapBo,
        link: '/danh-muc/hoa',
    },
    {
        name: 'Hộp Quà',
        icon: images.hopqua,
        link: '/danh-muc/hop-qua',
    },
];

export const MENUS_NAV = [
    { url: '/', content: 'Trang chủ' },
    { url: '/danh-muc/gau-bong', content: 'Gấu bông' },
    { url: '/danh-muc/hoa', content: 'Hồng sáp' },
    { url: '/danh-muc/nail', content: 'Nail' },
    { url: '/blog', content: 'Blog' },
    { url: '/lien-he', content: 'Liên hệ' },
    { url: '/uu-dai', content: 'Ưu đãi' },
];
