import React from 'react';

import Header from '../layouts/Header';
import AccountInfo from '../layouts/AccountInfo';
import License from '../layouts/License';
import Income from '../layouts/Income';
import TransactionHistory from '../layouts/TransactionHistory';

import '../assets/stylesheets/Invoice.css';

const Invoice = () => {
    return (
        <div className='container'>
            <Header />
            <AccountInfo />
            <License />
            <Income />
            <TransactionHistory />
        </div>
    );
}

export default Invoice;