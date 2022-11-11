import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1>Blog website Gấu bông xinh !</h1>
        </div>
    );
}

export default Blog;
