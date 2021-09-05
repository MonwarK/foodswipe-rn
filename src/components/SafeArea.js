import React from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import styled from 'styled-components/native'

const SafeAreaComponent = styled(SafeAreaView)`
  flex: 1;
  ${Platform.OS === "android" && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SafeArea = ({ children }) => {
    return (
        <SafeAreaComponent>
            {children}
        </SafeAreaComponent>
    )
}

export default SafeArea;
