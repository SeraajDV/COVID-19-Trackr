import React from 'react';
import Lottie from 'react-lottie';

import logo from '../../lotties/logo.json';

import styles from './Header.module.css';

function Header() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: logo,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className={styles.container}>
            <h1>C</h1>
            <Lottie 
                options={defaultOptions}
                height={50}
                width={50}
            />
            <h1>VID-19 Trackr</h1>
        </div>
    )
}

export default Header
