import { nail, teddyBear, rose } from '~/assets/iconVector';

import images from '~/assets/images';

const CatagoryData = [
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
const NewProductData = [
    {
        id: 1,
        name: 'HEO ĐEO TIM NGỒI',
        discription:
            'Dáng lợn ngồi, béo, mặt ngộ nghĩnh. Bên ngoài là chất nhung siêu mềm mịn, đàn hồi và mát tay. Bên trong là 100% bông trắng loại 1, mềm êm làm cho người ôm cảm giác rất thích thú. Kích thước tính từ đầu đến hết mông.',
        icon: images.heoDeoTimNgoi,
        link: '/',
        rating: 255,
        price: 'LIÊN HỆ',
    },
    {
        id: 2,
        name: 'HEO ĐEO TIM NGỒI',
        discription:
            'Dáng lợn ngồi, béo, mặt ngộ nghĩnh. Bên ngoài là chất nhung siêu mềm mịn, đàn hồi và mát tay. Bên trong là 100% bông trắng loại 1, mềm êm làm cho người ôm cảm giác rất thích thú. Kích thước tính từ đầu đến hết mông.',
        icon: images.heoDeoTimNgoi,
        link: '/',
        rating: 255,
        price: 'LIÊN HỆ',
    },
    {
        id: 3,
        name: 'HEO ĐEO TIM NGỒI',
        discription:
            'Dáng lợn ngồi, béo, mặt ngộ nghĩnh. Bên ngoài là chất nhung siêu mềm mịn, đàn hồi và mát tay. Bên trong là 100% bông trắng loại 1, mềm êm làm cho người ôm cảm giác rất thích thú. Kích thước tính từ đầu đến hết mông.',
        icon: images.heoDeoTimNgoi,
        link: '/',
        rating: 255,
        price: 'LIÊN HỆ',
    },
    {
        id: 4,
        name: 'HEO ĐEO TIM NGỒI',
        discription:
            'Dáng lợn ngồi, béo, mặt ngộ nghĩnh. Bên ngoài là chất nhung siêu mềm mịn, đàn hồi và mát tay. Bên trong là 100% bông trắng loại 1, mềm êm làm cho người ôm cảm giác rất thích thú. Kích thước tính từ đầu đến hết mông.',
        icon: images.heoDeoTimNgoi,
        link: '/',
        rating: 255,
        price: 'LIÊN HỆ',
    },
    {
        id: 5,
        name: 'HEO ĐEO TIM NGỒI',
        discription:
            'Dáng lợn ngồi, béo, mặt ngộ nghĩnh. Bên ngoài là chất nhung siêu mềm mịn, đàn hồi và mát tay. Bên trong là 100% bông trắng loại 1, mềm êm làm cho người ôm cảm giác rất thích thú. Kích thước tính từ đầu đến hết mông.',
        icon: images.heoDeoTimNgoi,
        link: '/',
    },
    {
        id: 6,
        name: 'HEO ĐEO TIM NGỒI',
        discription:
            'Dáng lợn ngồi, béo, mặt ngộ nghĩnh. Bên ngoài là chất nhung siêu mềm mịn, đàn hồi và mát tay. Bên trong là 100% bông trắng loại 1, mềm êm làm cho người ôm cảm giác rất thích thú. Kích thước tính từ đầu đến hết mông.',
        icon: images.heoDeoTimNgoi,
        link: '/',
        rating: 255,
        price: 'LIÊN HỆ',
    },
    {
        id: 7,
        name: 'HEO ĐEO TIM NGỒI',
        discription:
            'Dáng lợn ngồi, béo, mặt ngộ nghĩnh. Bên ngoài là chất nhung siêu mềm mịn, đàn hồi và mát tay. Bên trong là 100% bông trắng loại 1, mềm êm làm cho người ôm cảm giác rất thích thú. Kích thước tính từ đầu đến hết mông.',
        icon: images.heoDeoTimNgoi,
        link: '/',
        rating: 255,
        price: 'LIÊN HỆ',
    },
    {
        id: 8,
        name: 'HEO ĐEO TIM NGỒI',
        discription:
            'Dáng lợn ngồi, béo, mặt ngộ nghĩnh. Bên ngoài là chất nhung siêu mềm mịn, đàn hồi và mát tay. Bên trong là 100% bông trắng loại 1, mềm êm làm cho người ôm cảm giác rất thích thú. Kích thước tính từ đầu đến hết mông.',
        icon: images.heoDeoTimNgoi,
        link: '/',
        rating: 255,
        price: 'LIÊN HỆ',
    },
    {
        id: 9,
        name: 'HEO ĐEO TIM NGỒI',
        discription:
            'Dáng lợn ngồi, béo, mặt ngộ nghĩnh. Bên ngoài là chất nhung siêu mềm mịn, đàn hồi và mát tay. Bên trong là 100% bông trắng loại 1, mềm êm làm cho người ôm cảm giác rất thích thú. Kích thước tính từ đầu đến hết mông.',
        icon: images.heoDeoTimNgoi,
        link: '/',
        rating: 255,
        price: 'LIÊN HỆ',
    },
    {
        id: 10,
        name: 'HEO ĐEO TIM NGỒI',
        discription:
            'Dáng lợn ngồi, béo, mặt ngộ nghĩnh. Bên ngoài là chất nhung siêu mềm mịn, đàn hồi và mát tay. Bên trong là 100% bông trắng loại 1, mềm êm làm cho người ôm cảm giác rất thích thú. Kích thước tính từ đầu đến hết mông.',
        icon: images.heoDeoTimNgoi,
        link: '/',
    },
];

export { CatagoryData, NewProductData };
