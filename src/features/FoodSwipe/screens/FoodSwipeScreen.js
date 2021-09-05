import React, { createRef, useContext } from 'react'
import SafeArea from '../../../components/SafeArea'
import Swiper from "react-native-deck-swiper"
import FoodCard from "../components/FoodCard"
import { MealsContext } from '../../../services/meals/MealsContext'
import { Button } from 'react-native-paper'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { AntDesign } from "@expo/vector-icons"

const ButtonContainer = styled(View)`
  position: absolute;
  width: 100%;
  bottom: 20px;
  flex-direction: row;
  justify-content: center;
`

const SwipeButton = styled(Button)`
  border-radius: 100px;
  width: 65px;
  height: 65px;
  justify-content: center;
  margin: 0 30px;
`

const FoodSwipeScreen = ({ navigation }) => {
  const swipeRef = createRef();
  const { meals, onSave } = useContext(MealsContext);

  const onTapCard = (index) => navigation.navigate("FoodDescriptionScreen", { id: meals[index].id});

  if (!meals) {
    return null
  }

  return (
    <SafeArea>
      <Swiper
        ref={swipeRef}
        cards={meals}
        renderCard={(card) => {
          return (
            <FoodCard card={card} />
          )
        }}
        onSwipedRight={(index) => onSave(index)}
        cardIndex={0}
        stackSize= {3}
        verticalSwipe={false}
        backgroundColor="#f1f1f1"
        onTapCard={onTapCard}
        infinite
      />
      <ButtonContainer>
        <SwipeButton color="red" mode="contained" onPress={() => swipeRef.current.swipeLeft()}>
          <AntDesign name="close" size={20} />
        </SwipeButton>
        <SwipeButton color="green" mode="contained" onPress={() => swipeRef.current.swipeRight()}>
          <AntDesign name="check" size={20} />
        </SwipeButton>
      </ButtonContainer>
    </SafeArea>    
  )
}

export default FoodSwipeScreen