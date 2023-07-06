import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

import Header from '../layouts/Header';
import AccountInfo from '../layouts/AccountInfo';
import License from '../layouts/License';
import Income from '../layouts/Income';
import TransactionHistory from '../layouts/TransactionHistory';

import '../assets/stylesheets/Invoice.css';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '46px 30px'
    }
});

const Invoice = () => {
    return (
        <Document>
            <Page style={styles.container}>
                <Header />
                <AccountInfo />
                <License />
                <Income />
                <TransactionHistory />
            </Page>
        </Document>
    );
}

export default Invoice;