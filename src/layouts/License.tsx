import React from 'react';

const License = () => {
    return (
        <div className='license'>
            <p className='caption'>Licenses in account</p>
            <div className='table'>
                <div className='row header'>
                    <div style={{ textAlign: 'left' }}>Promotional</div>
                    <div>Quantity</div>
                    <div>Value</div>
                </div>
                <div className='row content'>
                    <div style={{ textAlign: 'left' }}>
                        <p className='text-header'>CFP</p>
                        <p className='text-content'>1 March 2023 | Conflow Power Group</p>
                    </div>
                    <div>10,000</div>
                    <div>$200,000</div>
                </div>
                <div className='row content'>
                    <div style={{ textAlign: 'left' }}>
                        <p className='text-header'>ILA</p>
                        <p className='text-content'>27 February 2023 | iLamp</p>
                    </div>
                    <div>10,000</div>
                    <div>$10.00</div>
                </div>
            </div>
            <div className='table'>
                <div className='row header'>
                    <div style={{ textAlign: 'left' }}>Territories</div>
                    <div>Type</div>
                    <div>Value</div>
                </div>
                <div className='row content'>
                    <div style={{ textAlign: 'left' }}>
                        <p className='text-header'>ILA Atlanta</p>
                        <p className='text-content'>1 March 2023 | iLamp</p>
                    </div>
                    <div>Option</div>
                    <div>$200,000</div>
                </div>
                <div className='row content'>
                    <div style={{ textAlign: 'left' }}>
                        <p className='text-header'>CFP Georgia</p>
                        <p className='text-content'>27 February 2023 | Conflow Power Group</p>
                    </div>
                    <div>Full License</div>
                    <div>$10.00</div>
                </div>
            </div>
            <div className='table'>
                <div className='row header'>
                    <div style={{ textAlign: 'left' }}>Distribution</div>
                    <div>Quantity</div>
                    <div>Value</div>
                </div>
                <div className='row content'>
                    <div style={{ textAlign: 'left' }}>
                        <p className='text-header'>CFP Atlanta</p>
                        <p className='text-content'>1 March 2023 | Conflow Power Group</p>
                    </div>
                    <div>10,000</div>
                    <div>$200,000</div>
                </div>
                <div className='row content'>
                    <div style={{ textAlign: 'left' }}>
                        <p className='text-header'>CFP Savannah</p>
                        <p className='text-content'>27 February 2023 | Conflow Power Group</p>
                    </div>
                    <div>10,000</div>
                    <div>$10.00</div>
                </div>
            </div>
        </div>
    );
}

export default License;