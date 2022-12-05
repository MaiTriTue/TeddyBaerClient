import images from '~/assets/images';
// import chroma from 'chroma-js';

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

export const ChangeToSlug = (str) => {
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();

    var from = 'àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ·/_,:;';
    var to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd------';
    for (var i = 0; i < from.length; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    return str;
};

// * @param integer n: độ dài của số thập phân

// * @param integer x: độ dài của các phần

export const ChangeToPrice = (number, n, x) => {
    let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return number.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&.');
};

//  data Register

// export interface ColourOption {
//     readonly value: string;
//     readonly label: string;
//     readonly color: string;
//     readonly isFixed?: boolean;
//     readonly isDisabled?: boolean;
//   }

export const dayOptions = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
    { value: '07', label: '07' },
    { value: '08', label: '08' },
    { value: '09', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '24' },
    { value: '25', label: '25' },
    { value: '26', label: '26' },
    { value: '27', label: '27' },
    { value: '28', label: '28' },
    { value: '29', label: '29' },
    { value: '30', label: '30' },
];
export const monthsOptions = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
    { value: '07', label: '07' },
    { value: '08', label: '08' },
    { value: '09', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
];

export const yearOptions = [
    { value: 1900, label: 1900 },
    { value: 1901, label: 1901 },
    { value: 1902, label: 1902 },
    { value: 1903, label: 1903 },
    { value: 1904, label: 1904 },
    { value: 1905, label: 1905 },
    { value: 1906, label: 1906 },
    { value: 1907, label: 1907 },
    { value: 1908, label: 1908 },
    { value: 1909, label: 1909 },
    { value: 1910, label: 1910 },
    { value: 1911, label: 1911 },
    { value: 1912, label: 1912 },
    { value: 1913, label: 1913 },
    { value: 1914, label: 1914 },
    { value: 1915, label: 1915 },
    { value: 1916, label: 1916 },
    { value: 1917, label: 1917 },
    { value: 1918, label: 1918 },
    { value: 1919, label: 1919 },
    { value: 1920, label: 1920 },
    { value: 1921, label: 1921 },
    { value: 1922, label: 1922 },
    { value: 1923, label: 1923 },
    { value: 1924, label: 1924 },
    { value: 1925, label: 1925 },
    { value: 1926, label: 1926 },
    { value: 1927, label: 1927 },
    { value: 1928, label: 1928 },
    { value: 1929, label: 1929 },
    { value: 1930, label: 1930 },
    { value: 1931, label: 1931 },
    { value: 1932, label: 1932 },
    { value: 1933, label: 1933 },
    { value: 1934, label: 1934 },
    { value: 1935, label: 1935 },
    { value: 1936, label: 1936 },
    { value: 1937, label: 1937 },
    { value: 1938, label: 1938 },
    { value: 1939, label: 1939 },
    { value: 1940, label: 1940 },
    { value: 1941, label: 1941 },
    { value: 1942, label: 1942 },
    { value: 1943, label: 1943 },
    { value: 1944, label: 1944 },
    { value: 1945, label: 1945 },
    { value: 1946, label: 1946 },
    { value: 1947, label: 1947 },
    { value: 1948, label: 1948 },
    { value: 1949, label: 1949 },
    { value: 1950, label: 1950 },
    { value: 1951, label: 1951 },
    { value: 1952, label: 1952 },
    { value: 1953, label: 1953 },
    { value: 1954, label: 1954 },
    { value: 1955, label: 1955 },
    { value: 1956, label: 1956 },
    { value: 1957, label: 1957 },
    { value: 1958, label: 1958 },
    { value: 1959, label: 1959 },
    { value: 1960, label: 1960 },
    { value: 1961, label: 1961 },
    { value: 1962, label: 1962 },
    { value: 1963, label: 1963 },
    { value: 1964, label: 1964 },
    { value: 1965, label: 1965 },
    { value: 1966, label: 1966 },
    { value: 1967, label: 1967 },
    { value: 1968, label: 1968 },
    { value: 1969, label: 1969 },
    { value: 1970, label: 1970 },
    { value: 1971, label: 1971 },
    { value: 1972, label: 1972 },
    { value: 1973, label: 1973 },
    { value: 1974, label: 1974 },
    { value: 1975, label: 1975 },
    { value: 1976, label: 1976 },
    { value: 1977, label: 1977 },
    { value: 1978, label: 1978 },
    { value: 1979, label: 1979 },
    { value: 1980, label: 1980 },
    { value: 1981, label: 1981 },
    { value: 1982, label: 1982 },
    { value: 1983, label: 1983 },
    { value: 1984, label: 1984 },
    { value: 1985, label: 1985 },
    { value: 1986, label: 1986 },
    { value: 1987, label: 1987 },
    { value: 1988, label: 1988 },
    { value: 1989, label: 1989 },
    { value: 1990, label: 1990 },
    { value: 1991, label: 1991 },
    { value: 1992, label: 1992 },
    { value: 1993, label: 1993 },
    { value: 1994, label: 1994 },
    { value: 1995, label: 1995 },
    { value: 1996, label: 1996 },
    { value: 1997, label: 1997 },
    { value: 1998, label: 1998 },
    { value: 1999, label: 1999 },
    { value: 2000, label: 2000 },
    { value: 2001, label: 2001 },
    { value: 2002, label: 2002 },
    { value: 2003, label: 2003 },
    { value: 2004, label: 2004 },
    { value: 2005, label: 2005 },
    { value: 2006, label: 2006 },
    { value: 2007, label: 2007 },
    { value: 2008, label: 2008 },
    { value: 2009, label: 2009 },
    { value: 2010, label: 2010 },
    { value: 2011, label: 2011 },
    { value: 2012, label: 2012 },
    { value: 2013, label: 2013 },
    { value: 2014, label: 2014 },
    { value: 2015, label: 2015 },
    { value: 2016, label: 2016 },
    { value: 2017, label: 2017 },
    { value: 2018, label: 2018 },
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
];

//   export interface FlavourOption {
//     readonly value: string;
//     readonly label: string;
//     readonly rating: string;
//   }

export const flavourOptions = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];

//   export interface StateOption {
//     readonly value: string;
//     readonly label: string;
//   }
export const colourStyles = {
    // control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //     const color = chroma(data.color);
    //     return {
    //         ...styles,
    //         backgroundColor: isDisabled ? 'red' : blue,
    //         color: '#FFF',
    //         cursor: isDisabled ? 'not-allowed' : 'default',
    //     };
    // },
};

export const LangueOptions = [
    {
        label: 'Ngôn ngữ',
        value: '',
    },
    { label: 'Việt Nam', value: 'VN' },
];

export const categoryOption = [
    {
        label: '- - Chọn danh mục - -',
        value: '',
    },
    {
        label: 'Gấu Bông',
        value: '/danh-muc/gau-bong',
    },
    {
        label: 'Thú Bông',
        value: '/danh-muc/thu-bong',
    },
    {
        label: 'Gấu Bông Hoạt Hình',
        value: '/danh-muc/gau-bong-hoat-hinh',
    },
    {
        label: 'Gối Bông & Phụ Kiện',
        value: '/danh-muc/goi-bong',
    },
    {
        label: 'Hoa Hồng Sáp ( bó )',
        value: '/danh-muc/hoa',
    },
    {
        label: 'Hộp Quà',
        value: '/danh-muc/hop-qua',
    },
];

export const stateOptions = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'DC', label: 'District Of Columbia' },
    { value: 'FM', label: 'Federated States Of Micronesia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'GU', label: 'Guam' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PW', label: 'Palau' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VI', label: 'Virgin Islands' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
];

export const optionLength = [
    { value: 1, label: 'general' },
    {
        value: 2,
        label: 'Evil is the moment when I lack the strength to be true to the Good that compels me.',
    },
    {
        value: 3,
        label: "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
    },
];

export const dogOptions = [
    { id: 1, label: 'Chihuahua' },
    { id: 2, label: 'Bulldog' },
    { id: 3, label: 'Dachshund' },
    { id: 4, label: 'Akita' },
];

// let bigOptions = [];
// for (let i = 0; i < 10000; i++) {
// 	bigOptions = bigOptions.concat(colourOptions);
// }

//   export interface GroupedOption {
//     readonly label: string;
//     readonly options: readonly ColourOption[] | readonly FlavourOption[];
//   }

export const groupedOptions = [
    {
        label: 'Day',
        options: dayOptions,
    },
    {
        label: 'Months',
        options: monthsOptions,
    },
];
