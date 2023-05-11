import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AiChat from '../main/AiChat'
// import CustomDrawer from './CustomDrawer'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
        {/* // <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props}/> }> */}
            <Drawer.Screen name='AiChat asdsd' component={AiChat} options={{headerShown: true}}  />

        </Drawer.Navigator>
    )
}

export default DrawerNavigator;