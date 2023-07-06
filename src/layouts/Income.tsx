import React from 'react';

const Income = () => {
    return (
        <div className='income'>
            <p className='caption'>Income</p>
            <div className='table'>
                <div className='row header'>
                    <div style={{ textAlign: 'left' }}>Royalties</div>
                    <div>Amount</div>
                    <div>Quantity</div>
                    <div>Total</div>
                </div>
                <div className='row content'>
                    <div style={{ textAlign: 'left' }}>
                        <p className='text-header'>CFP</p>
                        <p className='text-content'>1 March 2023 | Conflow Power Group</p>
                    </div>
                    <div>$1.50</div>
                    <div>10,000</div>
                    <div>$15,000</div>
                </div>
                <div className='row content'>
                    <div style={{ textAlign: 'left' }}>
                        <p className='text-header'>ILA</p>
                        <p className='text-content'>27 February 2023 | iLamp</p>
                    </div>
                    <div>$2.50</div>
                    <div>10,000</div>
                    <div>$25,000</div>
                </div>
            </div>
        </div>
    );
}

export default Income;