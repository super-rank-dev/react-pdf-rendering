import React from 'react';

import { ReactComponent as ClassSvg } from '../assets/icons/class.svg';
import { ReactComponent as PointSvg } from '../assets/icons/point.svg';
import { ReactComponent as WalletSvg } from '../assets/icons/wallet.svg';
import { ReactComponent as DistributionSvg } from '../assets/icons/distribution.svg';
import { ReactComponent as LicenseSvg } from '../assets/icons/license.svg';
import { ReactComponent as TerritorySvg } from '../assets/icons/territory.svg';

const AccountInfo = () => {
    return (
        <>
            <div className='account_info'>
                <div className='account_holder'>
                    <p className='header'>Account Holder</p>
                    <p className='content'>
                        Alfie Fitzpatrick<br />
                        23 Northumberland Avenue<br />
                        London<br />
                        WC2N 5AP<br />
                        United Kingdom<br />
                    </p>
                </div>
                <div className='account_others'>
                    <div className='row'>
                        <div className='account_email'>
                            <p className='header'>Account Email</p>
                            <p className='content'>120.ran@forexbinaryoption.pw</p>
                        </div>
                        <div className='account_id'>
                            <p className='header'>Account ID</p>
                            <p className='content'>63c83422862a1b2ffe387b6a</p>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='row'>
                        <div className='account_class col item'>
                            <ClassSvg />
                            <div>
                                <p className='header'>Account Class</p>
                                <p className='content'>Elite</p>
                            </div>
                        </div>
                        <div className='points_balance col item'>
                            <PointSvg />
                            <div>
                                <p className='header'>Points Balance</p>
                                <p className='content'>500,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='line'></p>
            <div className='account_items'>
                <div className='wallet item'>
                    <WalletSvg />
                    <div>
                        <p className='header'>Cash Balance</p>
                        <p className='content'>$522,000.94</p>
                    </div>
                </div>
                <div className='distribution item'>
                    <DistributionSvg />
                    <div>
                        <p className='header'>Cash Balance</p>
                        <p className='content'>$522,000.94</p>
                    </div>
                </div>
                <div className='license item'>
                    <LicenseSvg />
                    <div>
                        <p className='header'>Cash Balance</p>
                        <p className='content'>$522,000.94</p>
                    </div>
                </div>
                <div className='territory item'>
                    <TerritorySvg />
                    <div>
                        <p className='header'>Cash Balance</p>
                        <p className='content'>$522,000.94</p>
                    </div>
                </div>
            </div>
            <div className='account_open_orders'>
                <div className='table'>
                    <div className='row header'>
                        <div style={{ textAlign: 'left' }}>Open orders</div>
                        <div>Quantity</div>
                        <div>Sell price</div>
                    </div>
                    <div className='row content'>
                        <div style={{ textAlign: 'left' }}>
                            <p className='text-header'>Sell Order CFP</p>
                            <p className='text-content'>1 March 2023 | Conflow Power Group</p>
                        </div>
                        <div>10,000</div>
                        <div>$20.00</div>
                    </div>
                    <div className='row content'>
                        <div style={{ textAlign: 'left' }}>
                            <p className='text-header'>Sell Order ILA</p>
                            <p className='text-content'>27 February 2023 | iLamp</p>
                        </div>
                        <div>10,000</div>
                        <div>$10.00</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountInfo;