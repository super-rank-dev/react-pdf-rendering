import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
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
    license: {
        marginBottom: '15px'
    },
    caption: {
        color: '#000',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
    }
});

const License = () => {
    return (
        <View style={styles.license}>
            <Text style={styles.caption}>Licenses in account</Text>
            
            <View style={{ ...styles.table }}>
                <View style={{ ...styles.tableRow, ...styles.tableHeader }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>Promotional</View>
                    <View style={styles.tableRowView}>Quantity</View>
                    <View style={styles.tableRowView}>Value</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>CFP</Text>
                        <Text style={styles.tableTextContent}>1 March 2023 | Conflow Power Group</Text>
                    </View>
                    <View style={styles.tableRowView}>10,000</View>
                    <View style={styles.tableRowView}>$200,000</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>10,000</View>
                    <View style={styles.tableRowView}>$10.00</View>
                </View>
            </View>
            
            <View style={{ ...styles.table }}>
                <View style={{ ...styles.tableRow, ...styles.tableHeader }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>Territories</View>
                    <View style={styles.tableRowView}>Type</View>
                    <View style={styles.tableRowView}>Value</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>ILA Atlanta</Text>
                        <Text style={styles.tableTextContent}>1 March 2023 | iLamp</Text>
                    </View>
                    <View style={styles.tableRowView}>Option</View>
                    <View style={styles.tableRowView}>$200,000</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>CFP Georgia</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | Conflow Power Group</Text>
                    </View>
                    <View style={styles.tableRowView}>Full License</View>
                    <View style={styles.tableRowView}>$10.00</View>
                </View>
            </View>
            
            <View style={{ ...styles.table }}>
                <View style={{ ...styles.tableRow, ...styles.tableHeader }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>Distribution</View>
                    <View style={styles.tableRowView}>Quantity</View>
                    <View style={styles.tableRowView}>Value</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>CFP Atlanta</Text>
                        <Text style={styles.tableTextContent}>1 March 2023 | Conflow Power Group</Text>
                    </View>
                    <View style={styles.tableRowView}>10,000</View>
                    <View style={styles.tableRowView}>$200,000</View>
                </View>
                <View style={{ ...styles.tableRow, ...styles.tableContent }}>
                    <View style={{ ...styles.tableRowView, textAlign: 'left' }}>
                        <Text>CFP Savannah</Text>
                        <Text style={styles.tableTextContent}>27 February 2023 | Conflow Power Group</Text>
                    </View>
                    <View style={styles.tableRowView}>10,000</View>
                    <View style={styles.tableRowView}>$10.00</View>
                </View>
            </View>
        </View>
    );
}

export default License;