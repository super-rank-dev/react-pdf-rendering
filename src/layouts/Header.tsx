import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { ReactComponent as LogoSvg } from '../assets/icons/logo.svg';
import { ReactComponent as StampSvg } from '../assets/icons/stamp.svg';

const styles = StyleSheet.create({
    logo_p: {
        color: '#454745',
        fontSize: '8px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '11px',

        display: 'flex',
        flexDirection: 'column',
        margin: '14.2px 0 25px'
    },
    logo_span: {
        color: '#000'
    },
    stamp: {
        position: 'absolute',
        top: '50px',
        right: '50px'
    },
    date_p: {
        color: '#000',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',

        display: 'flex',
        flexDirection: 'column',
        margin: '23px 0 20px'
    },
    line: {
        height: '1px',
        backgroundColor: 'rgba(135, 135, 135, 0.39)'
    }
});

const Header = () => {
    return (
        <View>
            <View>
                <LogoSvg />
                <Text style={styles.logo_p}>
                    <Text style={styles.logo_span}>ILOCX Ltd</Text>
                    <Text>23 Northumberland Avenue</Text>
                    <Text>London</Text>
                    <Text>WC2N 5AP</Text>
                    <Text>United Kingdom</Text>
                </Text>
            </View>
            <View style={styles.stamp}>
                <StampSvg />
            </View>
            <View style={styles.date_p}>
                <Text>Account Statement - USD</Text>
                <Text style={{ fontSize: '12px', margin: '8px 0' }}>1 February 2023 - 1 March 2023</Text>
                <Text style={{ fontSize: '9px', margin: '10px 0 22px' }}>Created on: 1 March 2023</Text>
                <Text style={styles.line}></Text>
            </View>
        </View >
    );
}

export default Header;