import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    line: {
        height: '1px',
        backgroundColor: 'rgba(135, 135, 135, 0.39)'
    },
    caption: {
        color: '#000',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
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
    }
});

const TransactionHistory = () => {
    return (
        <View>
            <Text style={styles.caption}>Transaction History</Text>
            <View style={{ ...styles.table }}>
                <View style={{ ...styles.tableRow, ...styles.tableHeader }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>Balance</View>
                    <View style={styles.tableRowView}>522.94 USD</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>SELL CFP X 1 @ $9.5</Text>
                        <Text style={styles.tableTextContent}>1 March 2023 | Transaction: Stripe</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>$522.94</View>
                </View>
            </View>
        </View>
    );
}

export default TransactionHistory;