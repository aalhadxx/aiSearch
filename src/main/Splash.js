import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { create } from 'react-test-renderer';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 800);
    }, []);
    return (
        <View style={styles.container}>
            <Text>Splash</Text>
        </View>
    );
};

var styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center'
    }

})
export default Splash;