import React from 'react';

import { ReactComponent as LogoSvg } from '../assets/icons/logo.svg';
import { ReactComponent as StampSvg } from '../assets/icons/stamp.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <LogoSvg />
                <p>
                    <span>ILOCX Ltd<br /></span>
                    23 Northumberland Avenue<br />
                    London<br />
                    WC2N 5AP<br />
                    United Kingdom<br />
                </p>
            </div>
            <div className='stamp'>
                <StampSvg />
            </div>

            <div className='date'>
                <p>Account Statement - USD</p>
                <p style={{ fontSize: '12px' }}>1 February 2023 - 1 March 2023</p>
                <p style={{ fontSize: '9px' }}>Created on: 1 March 2023</p>
                <p className='line'></p>
            </div>

        </div >
    );
}

export default Header;