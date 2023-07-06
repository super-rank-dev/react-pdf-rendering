import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

import { ReactComponent as ClassSvg } from '../assets/icons/class.svg';
import { ReactComponent as PointSvg } from '../assets/icons/point.svg';
import { ReactComponent as WalletSvg } from '../assets/icons/wallet.svg';
import { ReactComponent as DistributionSvg } from '../assets/icons/distribution.svg';
import { ReactComponent as LicenseSvg } from '../assets/icons/license.svg';
import { ReactComponent as TerritorySvg } from '../assets/icons/territory.svg';

// import { GLOBAL_STYLES } from '../plugins/stylesheets';

const styles = StyleSheet.create({
    line: {
        height: '1px',
        backgroundColor: 'rgba(135, 135, 135, 0.39)'
    },
    table: {
        margin: '15px 0 25px',
        display: 'flex',
        flexDirection: 'column'
    },
    tableRow: {
        display: 'flex',
        padding: '5px 10px 7px',
        borderBottom: '1px solid rgba(135, 135, 135, 0.39)'
    },
    tableRowView: {
        flexBasis: 0,
        flexGrow: 1,

        display: 'flex',
        flexDirection: 'column'
    },
    tableHeader: {
        color: '#1F67D6',
        textAlign: 'right',
        fontSize: '9.5px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',

        backgroundColor: '#E8F0FB',
        borderBottom: '1px solid #1F67D6'
    },
    tableContent: {
        color: '#000',
        textAlign: 'right',
        fontSize: '8px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal'
    },
    tableText: {
        margin: 0
    },
    tableTextContent: {
        color: '#454745',
        fontSize: '7.7px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',

        marginTop: '3px'
    },
    accountInfo: {
        display: 'flex'
    },
    accountInfoHeader: {
        color: '#000',
        fontSize: '9px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
        margin: '2px 0'
    },
    accountInfoContent: {
        color: '#000',
        fontSize: '9px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '12px',

        display: 'flex',
        flexDirection: 'column',
        margin: '2px 0'
    },
    accountInfoCol: {
        display: 'flex',
        alignItems: 'center'
    },
    accountHolder: {
        flexGrow: 1,

        display: 'flex',
        flexDirection: 'column'
    },
    accountOthers: {
        flexGrow: 2,

        display: 'flex',
        flexDirection: 'column'
    },
    accountOthersRow: {
        display: 'flex'
    },
    accountOthersRowView: {
        flexGrow: 1,

        display: 'flex',
        flexDirection: 'column'
    },
    accountOthersItem: {
        flexGrow: 1,
        padding: '13px 0'
    },
    accountOthersItemText: {
        margin: '0 8px'
    },
    accountItems: {
        display: 'flex',
        justifyContent: 'space-between',

        margin: '20px 0 0'
    },
    accountItem: {
        display: 'flex',
        alignItems: 'center'
    },
    accountItemView: {
        display: 'flex',
        flexDirection: 'column',

        marginLeft: '5px'
    },
    accountItemText: {
        margin: '2px 8px'
    },
    accountItemsHeader: {
        color: '#000',
        fontSize: '8px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
    },
    accountItemsContent: {
        color: '#000',
        fontSize: '9.5px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal'
    },
    accountOpenOrders: {
        margin: '15px 0',

        display: 'flex',
        flexDirection: 'column'
    }
});

const AccountInfo = () => {
    return (
        <>
            <View style={styles.accountInfo}>
                <View style={styles.accountHolder}>
                    <Text style={styles.accountInfoHeader}>Account Holder</Text>
                    <Text style={styles.accountInfoContent}>
                        <Text>Alfie Fitzpatrick</Text>
                        <Text>23 Northumberland Avenue</Text>
                        <Text>London</Text>
                        <Text>WC2N 5AP</Text>
                        <Text>United Kingdom</Text>
                    </Text>
                </View>
                <View style={styles.accountOthers}>
                    <View style={styles.accountOthersRow}>
                        <View style={styles.accountOthersRowView}>
                            <Text style={styles.accountInfoHeader}>Account Email</Text>
                            <Text style={{ ...styles.accountInfoContent, margin: '5px 0 13px' }}>120.ran@forexbinaryoption.pw</Text>
                        </View>
                        <View style={styles.accountOthersRowView}>
                            <Text style={styles.accountInfoHeader}>Account ID</Text>
                            <Text style={{ ...styles.accountInfoContent, margin: '5px 0 13px' }}>163c83422862a1b2ffe387b6a</Text>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.accountOthersRow}>
                        <View style={{ ...styles.accountInfoCol, ...styles.accountOthersItem }}>
                            <ClassSvg />
                            <View style={styles.accountItemView}>
                                <Text style={styles.accountInfoHeader}>Account Class</Text>
                                <Text style={styles.accountInfoContent}>Elite</Text>
                            </View>
                        </View>
                        <View style={{ ...styles.accountInfoCol, ...styles.accountOthersItem }}>
                            <PointSvg />
                            <View style={styles.accountItemView}>
                                <Text style={styles.accountInfoHeader}>Points Balance</Text>
                                <Text style={styles.accountInfoContent}>500,000</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={styles.line}></Text>
            <View style={styles.accountItems}>
                <View style={styles.accountItem}>
                    <WalletSvg />
                    <View style={styles.accountItemView}>
                        <Text style={styles.accountInfoHeader}>Cash Balance</Text>
                        <Text style={styles.accountInfoContent}>$522,000.94</Text>
                    </View>
                </View>
                <View style={styles.accountItem}>
                    <DistributionSvg />
                    <View style={styles.accountItemView}>
                        <Text style={styles.accountInfoHeader}>Cash Balance</Text>
                        <Text style={styles.accountInfoContent}>$522,000.94</Text>
                    </View>
                </View>
                <View style={styles.accountItem}>
                    <LicenseSvg />
                    <View style={styles.accountItemView}>
                        <Text style={styles.accountInfoHeader}>Cash Balance</Text>
                        <Text style={styles.accountInfoContent}>$522,000.94</Text>
                    </View>
                </View>
                <View style={styles.accountItem}>
                    <TerritorySvg />
                    <View style={styles.accountItemView}>
                        <Text style={styles.accountInfoHeader}>Cash Balance</Text>
                        <Text style={styles.accountInfoContent}>$522,000.94</Text>
                    </View>
                </View>
            </View>
            <View style={styles.accountOpenOrders}>
                <View style={{ ...styles.table }}>
                    <View style={{ ...styles.tableRow, ...styles.tableHeader }}>
                        <View style={{ ...styles.tableRowView, textAlign: 'left' }}>Open orders</View>
                        <View style={styles.tableRowView}>Quantity</View>
                        <View style={styles.tableRowView}>Sell price</View>
                    </View>
                    <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                        <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                            <Text>Sell Order CFP</Text>
                            <Text style={styles.tableTextContent}>1 March 2023 | Conflow Power Group</Text>
                        </View>
                        <View style={styles.tableRowView}>10,000</View>
                        <View style={styles.tableRowView}>$20.00</View>
                    </View>
                    <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                        <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                            <Text>Sell Order ILA</Text>
                            <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                        </View>
                        <View style={styles.tableRowView}>10,000</View>
                        <View style={styles.tableRowView}>$10.00</View>
                    </View>
                </View>
            </View>
        </>
    );
}

export default AccountInfo;