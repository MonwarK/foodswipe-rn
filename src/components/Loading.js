import AnimatedLottieView from 'lottie-react-native'
import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native';

export const AnimationContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const AnimatedView = styled(AnimatedLottieView)`
  height: 150px;
`; 

const LoadingText = styled(Text)`

`;

const Loading = () => {
  return (
    <AnimationContainer>
      <AnimatedView
        source={require("../../assets/pan-food-fry-on-fire.json")}
        autoPlay
        loop
        resizeMode="cover"
      />
      <LoadingText>Loading...</LoadingText>
    </AnimationContainer>
  )
}

export default Loading
