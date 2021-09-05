import React from 'react'
import { View, Text } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'
import styled from 'styled-components/native'

const CardContainer = styled(Card)`
  height: 450px;
`

const CardImage = styled(Card.Cover)`
  height: 80%;
`

const FoodCard = ({card}) => {
  const { name, imageUrl, description } = card;

  return (
      <CardContainer>
        <CardImage source={{ uri : imageUrl}} resizeMode="cover"  />
        <Card.Content>
          <Title numberOfLines={1}>{name}</Title>
          <Paragraph numberOfLines={2}>{description}</Paragraph>
        </Card.Content>
      </CardContainer>
  )
}

export default FoodCard
